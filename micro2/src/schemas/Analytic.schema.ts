import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnalyticDocument = HydratedDocument<Analytic>;

@Schema()
export class Analytic {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  pwdStrength: string;
}

export const AnalyticSchema = SchemaFactory.createForClass(Analytic);
