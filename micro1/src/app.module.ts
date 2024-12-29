import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/User.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nishantcs21:1234@cluster0.wzsovnv.mongodb.net/CCAAT?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
