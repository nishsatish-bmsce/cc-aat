import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly users = [];

  constructor(
    @Inject('MICRO1') private readonly micro1client: ClientProxy,
    @Inject('MICRO2') private readonly micro2client: ClientProxy,
    @Inject('LOGGER') private readonly loggerClient: ClientProxy,
  ) {}

  getAllUsers() {
    const users = this.micro1client.send('get_users', {});
    if (users) {
      this.loggerClient.emit('fire_log', {
        event: 'All Users Fetched',
        loggedAt: Date.now().toString(),
      });
      return users;
    }
  }

  // Example of an Event based communication
  createUser(createUserReq: CreateUserDTO) {
    // Once we receive the original request, communicate with the other microservices
    this.micro1client.emit('create_new_user', createUserReq);
    this.micro2client.emit('user_created', createUserReq);
    this.loggerClient.emit('fire_log', {
      event: 'User Created',
      loggedAt: Date.now().toString(),
    });
  }

  getAnalytics() {
    // Example of a Request-Response commnication
    const analytics = this.micro2client.send('get_analytics', {});
    // .send() returns an observable
    // In nestjs, the observable is already subscribed to, so you can directly useit like a value
    if (analytics) {
      this.loggerClient.emit('fire_log', {
        event: 'Analytics Fetched',
        loggedAt: Date.now().toString(),
      });
      return analytics;
    }
  }
}
