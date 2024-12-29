import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getAllUsers() {
    return this.appService.getAllUsers();
  }

  @Post('users')
  createUser(@Body() createUser: CreateUserDTO) {
    // This is the point where the request first comes in
    this.appService.createUser(createUser);
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
