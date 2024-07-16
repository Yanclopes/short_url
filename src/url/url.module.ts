import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { PrismaService } from '../prisma.service';
import { CleanupService } from './cleanurl.service';

@Module({
  controllers: [UrlController],
  providers: [UrlService, PrismaService, CleanupService],
})
export class UrlModule {}
