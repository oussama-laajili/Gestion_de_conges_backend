import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/users.service';
import { JwtPayload } from './jwt-payload.interface';
import { User } from '../schema/User.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload: JwtPayload = { 
      email: user.email, 
      jobtitle: user.jobtitle,
      fullname: user.fullname, 
      avatar: user.avatar 
    };
    return {
      access_token: this.jwtService.sign(payload),
      jobtitle: user.jobtitle,
      fullname: user.fullname
    };
  }

  async validateJwtPayload(payload: JwtPayload): Promise<User> {
    return this.userService.findByEmail(payload.email);
  }
}
