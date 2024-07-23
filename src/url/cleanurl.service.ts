import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cron } from '@nestjs/schedule';
import * as moment from 'moment';

@Injectable()
export class CleanupService implements OnModuleInit {
  constructor(private readonly prismaService: PrismaService) {}

  onModuleInit() {
    this.deleteOldRecords();
  }

  @Cron('0 0 * * *')
  async deleteOldRecords() {
    const thresholdDate = moment().subtract(7, 'days').toDate();
    try {
      const deletedCount = await this.prismaService.url.deleteMany({
        where: {
          created_at: {
            lt: thresholdDate,
          },
        },
      });

      console.log(`Deleted ${deletedCount.count} records older than 7 days.`);
    } catch (error) {
      console.error('Error deleting old records:', error);
    }
  }
}
