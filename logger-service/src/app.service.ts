import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Log } from './schemas/Log.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('Log') private logModel: Model<Log>) {}
  async createLog(data: { event: string; loggedAt: string }) {
    const log = new this.logModel({
      event: data.event,
      timestamp: data.loggedAt,
    });
    try {
      await log.save();
    } catch (error) {
      console.error('Error saving log:', error);
    }
  }
}
