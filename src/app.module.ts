import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from './url/url.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UrlModule],
  controllers: [AppController],
  providers: [AppService, UrlModule, PrismaService],
})
export class AppModule {}
