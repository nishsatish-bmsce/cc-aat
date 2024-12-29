import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_users')
  getAllUsers() {
    return this.appService.getAllUsers();
  }

  @EventPattern('create_new_user')
  handleReq(data: { email: string; pwd: string }) {
    console.log(data);
    this.appService.saveUser(data);
  }
}
