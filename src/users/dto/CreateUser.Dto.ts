import { IsString, IsEmail, IsDate, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsDate()
  dob: Date;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  cin: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string; // Ensure email is validated

  @IsNotEmpty()
  @IsString()
  adresse: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  postalcode: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  typeofdegree: string;

  @IsNotEmpty()
  @IsString()
  speciality: string;

  @IsNotEmpty()
  @IsDate()
  dateofdegree: Date;

  @IsNotEmpty()
  @IsString()
  jobtitle: string;

  @IsNotEmpty()
  @IsString()
  departement: string;

  @IsNotEmpty()
  @IsString()
  linemanager: string;

  @IsNotEmpty()
  @IsDate()
  startdate: Date;

  @IsDate()
  enddate: Date;

  @IsString()
  avatar: string;

  @IsString()
  status: string;

  @IsString()
  id2: string;

  @IsString()
  degree: string;

  @IsNotEmpty()
  @IsString()
  password: string;
  
  @IsNotEmpty()
  @IsDate()
  resetTokenExpiration: Date;
}
