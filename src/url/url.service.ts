import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { PrismaService } from '../prisma.service';
import { nanoid } from 'nanoid';
import { url } from '@prisma/client';
import * as QRCode from 'qrcode';
import { BASEURL } from '../settings';
import * as moment from 'moment/moment';

@Injectable()
export class UrlService {
  constructor(private readonly prismaService: PrismaService) {}

  async create({ url }: CreateUrlDto): Promise<url> {
    const shortedId = nanoid(5);
    let qrcode;
    try {
      qrcode = await QRCode.toDataURL(`${BASEURL}/${shortedId}`);
    } catch (_err) {
      qrcode = null;
    }
    return this.prismaService.url.create({
      data: {
        shorted: shortedId,
        long: url,
        qrcode: qrcode,
        expired_at: moment().subtract(7, 'days').toDate(),
      },
    });
  }

  findAll(): Promise<url[]> {
    return this.prismaService.url.findMany();
  }

  findOne(id: string): Promise<url> {
    return this.prismaService.url.findUnique({
      where: { id },
    });
  }

  async findOneByShorted(id: string): Promise<url> {
    return this.prismaService.url.findUnique({
      where: {
        shorted: id,
      },
    });
  }

  remove(id: string) {
    this.prismaService.url.delete({
      where: { id },
    });
  }
}
