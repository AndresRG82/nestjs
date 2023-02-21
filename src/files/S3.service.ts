import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class S3Service {
  AWS_S3_BUCKET = process.env.AWS_S3_BUCKET_NAME;
  AWS_S3_DEFAULT_REGION = process.env.AWS_S3_DEFAULT_REGION;
  AWS_S3_BASE_URL = process.env.AWS_S3_BASE_URL;

  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  });

  async uploadFile(file, directory) {
    const { originalname } = file;

    await this.s3_upload(
      file.buffer,
      this.AWS_S3_BUCKET,
      directory + '/' + originalname,
      file.mimetype,
      this.AWS_S3_DEFAULT_REGION,
    );
    return this.AWS_S3_BASE_URL + '/' + directory + '/' + originalname;
  }

  async s3_upload(file, bucket, name, mimetype, location) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: location,
      },
    };

    console.log(params);

    try {
      const s3Response = await this.s3.upload(params).promise();

      console.log(s3Response);
    } catch (e) {
      console.log(e);
    }
  }
}
