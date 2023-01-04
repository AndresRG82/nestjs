import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('a');
    return this.appService.getHello();
  }
  //De aquí hacia abajo es para probar la app movil
}
