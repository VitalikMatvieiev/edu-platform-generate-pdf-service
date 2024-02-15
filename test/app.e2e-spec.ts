import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/application/app.module';

describe('PdfController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/pdf/download (GET)', () => {
    return request(app.getHttpServer())
      .get('/pdf/download')
      .send({
        userName: 'Vladyslav',
        userSurname: 'Mykolyshyn',
        instructorName: 'Vitalik',
        instructorSurname: 'Matvieiev',
        durationOfCourse: 10,
      })
      .expect(201)
      .expect('Content-Type', 'application/pdf');
  });

  afterAll(async () => {
    await app.close();
  });
});
