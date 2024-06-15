import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthResponseDto, AuthPayloadDto } from './auth.interface';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { compareSync as bcryptCompareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  private jwrExpiresIn: number;

  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {
    this.jwrExpiresIn = this.configService.get('JWT_EXPIRATION');
  }

  async signIn(data: AuthPayloadDto): Promise<AuthResponseDto> {
    const { username, password } = data;

    const user = await this.usersService.findByUserName(username);

    if (!user || !bcryptCompareSync(password, user.password)) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const playload = { sub: user.id, username: user.username };

    const token = this.jwtService.sign(playload);

    return {
      token,
      expiresIn: this.jwrExpiresIn,
    };
  }
}
