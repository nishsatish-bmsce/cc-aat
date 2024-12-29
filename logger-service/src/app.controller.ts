import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('fire_log')
  fireLog(data: { event: string; loggedAt: string }) {
    console.log(data);
    this.appService.createLog(data);
  }
}
