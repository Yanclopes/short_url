import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { url } from '@prisma/client';
import { UrlResponseDto } from './dto/response-url.dto';
import { BASEURL } from '../settings';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('url')
  async create(@Body() createUrlDto: CreateUrlDto) {
    const url = await this.urlService.create(createUrlDto);
    return {
      ...url,
      shortedUrl: `${BASEURL}/${url.shorted}`,
    } as UrlResponseDto;
  }

  @Get('url')
  async findAll() {
    const url = await this.urlService.findAll();
    return url.map(
      (url) =>
        ({
          ...url,
          shortedUrl: `${BASEURL}/${url.shorted}`,
        }) as UrlResponseDto,
    );
  }

  @Get('url/:id')
  async findOne(@Param('id') id: string) {
    const url = await this.urlService.findOne(id);
    return {
      ...url,
      shortedUrl: `${BASEURL}/${url.shorted}`,
    } as UrlResponseDto;
  }

  @Get(':id')
  @Redirect()
  async redirect(@Param('id') id: string) {
    const url: url = await this.urlService.findOneByShorted(id);
    if (!url) throw new NotFoundException(`URL doesn't exist`);
    return { url: url.long };
  }
}
