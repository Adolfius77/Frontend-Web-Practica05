import { Body,Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';


interface clase{
  id: number;
  nombre: string;
}
const clases: clase[] = [
  { id: 1, nombre: 'Yoga' },
  { id: 2, nombre: 'Spinning' },
  { id: 3, nombre: 'Zumba' }
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('clases')
  listar(): clase[] {
    return clases;
  }

  @Post('clases')
  crear(@Body() cuerpo: {nombre: string}): clase {
    const nuevaClase: clase = { id: clases.length + 1, nombre: cuerpo.nombre };
    clases.push(nuevaClase);
    return nuevaClase;
  }
}
