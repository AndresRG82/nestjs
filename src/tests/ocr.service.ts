import { Injectable } from '@nestjs/common';
import * as Jimp from 'jimp';
import * as tesseract from 'node-tesseract-ocr';

@Injectable()
export class OcrService {
  config = {
    lang: 'eng',
    oem: 1,
    psm: 4,
  };

  parseImage(image) {
    return tesseract
      .recognize(image, this.config)
      .then((text) => {
        return this.parseText(text);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  parseText(text: string) {
    const delimiters = ['\n', '/', ' '];
    const regularExpression = new RegExp(delimiters.join('|'), 'gim');
    return this.getImei(
      text.replace(regularExpression, delimiters[0]).split('\n'),
    );
  }

  getImei(texts: string[]) {
    return texts.filter(this.isIMEI);
  }

  isIMEI(s) {
    let sum = 0;
    let mul = 2;
    const l = 14;

    for (let i = 0; i < l; i++) {
      const digit = s.substring(l - i - 1, l - i);
      const tp = parseInt(digit, 10) * mul;
      if (tp >= 10) sum += (tp % 10) + 1;
      else sum += tp;
      if (mul == 1) mul++;
      else mul--;
    }
    const chk = (10 - (sum % 10)) % 10;
    if (chk != parseInt(s.substring(14, 15), 10)) return false;
    return true;
  }

  async imgMutator(imageInput: Express.Multer.File, type = 0) {
    const newImage: Jimp = await Jimp.read(imageInput.buffer);

    switch (type) {
      case 1:
        newImage.brightness(0.66);
        break;
      case 2:
        newImage.invert();
        break;
      case 3:
        newImage.greyscale();
        break;
      case 4:
        newImage.contrast(0.66);
        break;
      case 5:
        newImage.normalize();
        break;
      default:
        break;
    }

    const imageBuffer: any = await newImage.getBufferAsync(Jimp.MIME_JPEG);
    return this.parseImage(imageBuffer);
  }

  async ocr(imageInput: Express.Multer.File) {
    let imeis = [];
    let saveImeis = [];
    out: for (let index = 0; index < 6; index++) {
      imeis = await this.imgMutator(imageInput, index);
      switch (imeis.length) {
        case 1:
          saveImeis = imeis;
          break;
        case 2:
          saveImeis = imeis;

          break out;
        default:
          break;
      }
    }
    return saveImeis;
  }
}
