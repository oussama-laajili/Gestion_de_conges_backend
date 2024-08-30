// src/conge/schemas/conge.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Conge extends Document {
  @Prop({ type: Date, required: true })
  start: Date;

  @Prop({ type: Date, required: true })
  end: Date;

  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: String, required: true })
  statut: string;

  @Prop({ type: String, required: false })
  commentaire: string;

  @Prop({ type: String, required: false })
  supportingdoc: string; // Assuming this is a URL or path to the document

  @Prop({ type: String, required: true })
  email: string; // New field
}

export const CongeSchema = SchemaFactory.createForClass(Conge);
