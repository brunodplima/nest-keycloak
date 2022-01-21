import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/authentication/authentication/jwt.guard';

@Controller('user/profile')
export class ProfileController {
  @UseGuards(JwtGuard)
  @Get()
  test(@Req() req) {
    const { given_name, family_name, email, realm_access } = req.user;

    return {
      firstName: given_name,
      lastName: family_name,
      email,
      roles: realm_access.roles.filter((role: string) =>
        role.startsWith('my-'),
      ),
    };
  }
}
