import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getStatus();
  }

  @EventPattern('user_created')
  handleUserCreated(data: { email: string; pwd: string }) {
    this.appService.handleUserCreation(data);
  }

  @MessagePattern('get_analytics')
  getAnalytics() {
    return this.appService.getAnals();
  }
}
