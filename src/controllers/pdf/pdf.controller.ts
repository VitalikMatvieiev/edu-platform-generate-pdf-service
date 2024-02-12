import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PDFService } from '../../services/pdf/pdf.service';

//http://localhost:3001/api/pdf
@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PDFService) {}

  @Get('/download')
  async getPDF(@Res() res: Response): Promise<void> {
    const buffer = await this.pdfService.generatePDF();

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
