import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // ALLOWS INJECTION OF SERVICES THAT CAN BE USED TO DISPATCH MESSAGES AND EVENTS
    // IN THIS FILE THESE ARE JUST REGISTERED AS INJECTABLE TOKENS
    // THE ACTUAL ASSOCIATION OF EACH OF THESE TOKENS TO THEIR RESPECTIVE MICROSERVICES
    // HAPPENS WHEN YOU INJECT THESE TOKENS IN THEIR RESPECTIVE MICROSERVICE'S CONTROLLER OR SERVICE
    ClientsModule.register([
      {
        // any name
        name: 'MICRO1',
        transport: Transport.TCP,
        options: {
          host: 'micro1-service', // K8S service name, automatically dns will be resolved
          port: 3033,
        },
      },
      {
        name: 'MICRO2',
        transport: Transport.TCP,
        options: {
          host: 'micro2-service',
          port: 3031,
        },
      },
      {
        name: 'LOGGER',
        transport: Transport.TCP,
        options: {
          host: 'logger-service',
          port: 3032,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
