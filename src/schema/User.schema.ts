// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  toObject(): { [x: string]: any; password: any; } {
    throw new Error('Method not implemented.');
  }
  @Prop({ required: true })
  fullname: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true, unique: true })
  cin: number;

  @Prop({ required: true })
  phone: number;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  adresse: string;

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  postalcode/*etat: en conge ou non*/: number;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  typeofdegree: string;

  @Prop({ required: true })
  speciality: string;

  @Prop({ required: true })
  dateofdegree: Date;

  @Prop({ required: true })
  jobtitle: string;

  @Prop({ required: true })
  departement: string;

  @Prop({ required: true })
  linemanager: string;

  @Prop({ required: true })
  startdate: Date;

  @Prop()
  enddate: Date;

  @Prop()
  avatar: string; // Path to the image file

  @Prop()
  status: string; 

  @Prop()
  id2: string; // Path to the image file

  @Prop()
  degree: string; // Path to the image file

  @Prop({ required: true })
  password: string;
  @Prop()
  resetToken: string; // Path to the image file

  @Prop({ required: false })
  resetTokenExpiration: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
