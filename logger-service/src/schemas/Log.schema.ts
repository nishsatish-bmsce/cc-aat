import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LogDocument = HydratedDocument<Log>;

@Schema()
export class Log {
  @Prop({ required: true })
  event: string;

  @Prop({ required: true })
  timestamp: string;
}

export const LogSchema = SchemaFactory.createForClass(Log);
