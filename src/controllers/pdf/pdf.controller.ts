import { Controller, Get,HttpCode, HttpStatus, UsePipes, Res, ValidationPipe, Body } from '@nestjs/common';
import { Response } from 'express';
import { PDFService } from '../../services/pdf/pdf.service';
import { GeneratePdfDto } from 'src/services/dto/generate-pdf.dto';

//http://localhost:3001/api/pdf
@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PDFService) {}

  @Get('/download')
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  )
  async getPDF(@Res() res: Response, @Body() generatePdfDto: GeneratePdfDto): Promise<void> {
    const buffer = await this.pdfService.generatePdf(generatePdfDto);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': buffer.length,
    });

    res.end(buffer);
  }

  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pdfService.findOne(+id);
  }*/
}
