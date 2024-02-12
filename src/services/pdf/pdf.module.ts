import { Module } from '@nestjs/common';
import { PDFService } from './pdf.service';
import { PdfController } from '../../controllers/pdf/pdf.controller';

@Module({
  controllers: [PdfController],
  providers: [PDFService],
})
export class PdfModule {}
