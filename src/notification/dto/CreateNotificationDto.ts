import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  title: string;
}
