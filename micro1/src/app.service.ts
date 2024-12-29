import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  getHello(): string {
    return 'Hello World!';
  }

  async saveUser(userData: { email: string; pwd: string }) {
    const user = new this.userModel(userData);
    try {
      await user.save();
      console.log('success');
    } catch (error) {
      console.error('Error saving user:', error);
    }
  }

  async getAllUsers() {
    const users = this.userModel.find();
    if (users) {
      return users;
    }
  }
}
