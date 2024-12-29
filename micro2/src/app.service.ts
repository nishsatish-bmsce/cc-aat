import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Analytic } from 'src/schemas/Analytic.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Analytic') private analyticsModel: Model<Analytic>,
  ) {}
  getStatus(): string {
    return 'Analytics service is active';
  }

  async handleUserCreation(data: { email: string; pwd: string }) {
    const verdict = data.pwd.length > 8 ? 'secure' : 'insecure';
    const analytics = new this.analyticsModel({
      email: data.email,
      pwdStrength: verdict,
    });
    try {
      await analytics.save();
    } catch (error) {
      console.error('Error saving analytics:', error);
    }
  }

  async getAnals() {
    return this.analyticsModel.find();
  }
}
