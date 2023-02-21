import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { TestsService } from './tests.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from 'src/files/S3.service';
import { OcrService } from './ocr.service';
@Controller('tests')
export class TestsController {
  constructor(
    private readonly testsService: TestsService,
    private readonly s3Service: S3Service,
    private readonly ocrService: OcrService,
  ) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testsService.create(createTestDto);
  }

  @Get()
  findAll() {
    return this.testsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testsService.update(+id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testsService.remove(+id);
  }
  @Post('imei')
  @UseInterceptors(FileInterceptor('file'))
  uploadImeiFile(@UploadedFile() file: Express.Multer.File) {
    // this.s3Service.uploadFile(file, 'test-imei');
    return this.ocrService.ocr(file);
  }
}
