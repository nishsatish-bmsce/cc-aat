import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalyticSchema } from 'src/schemas/Analytic.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nishantcs21:1234@cluster0.wzsovnv.mongodb.net/CCAAT?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([{ name: 'Analytic', schema: AnalyticSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
