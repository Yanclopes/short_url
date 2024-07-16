import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UrlResponseDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  long: string;

  @IsString()
  @IsNotEmpty()
  shortedUrl: string;

  @IsString()
  @IsNotEmpty()
  qrcode: string;

  @IsString()
  @IsNotEmpty()
  created_at: Date;

  @IsString()
  @IsNotEmpty()
  expired_at: Date;
}
