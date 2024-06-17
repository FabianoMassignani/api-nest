export class AuthResponseDto {
  token: string;
  expiresIn: number;
}

export class AuthPayloadDto {
  username: string;
  password: string;
}
