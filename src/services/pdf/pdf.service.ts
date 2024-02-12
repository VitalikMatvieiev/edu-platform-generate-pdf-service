import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';

@Injectable()
export class PDFService {
  async generatePDF(): Promise<Buffer> {
    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        size: [1600, 1190],
        bufferPages: true,
      });

      // customize your PDF document
      doc.text('hello world', 100, 50);
      doc.end();

      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => {
        const data = Buffer.concat(buffer);
        resolve(data);
      });
    });

    return pdfBuffer;
  }
}
