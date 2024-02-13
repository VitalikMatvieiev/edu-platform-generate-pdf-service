import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GeneratePdfDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  userSurname: string;

  @IsNotEmpty()
  @IsString()
  instructorName: string;

  @IsNotEmpty()
  @IsString()
  instructorSurname: string;

  @IsNotEmpty()
  @IsNumber()
  durationOfCourse: number;
}
