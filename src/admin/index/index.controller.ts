import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/authentication/authentication/jwt.guard';
import { Role } from 'src/authentication/role.decorator';
import { RoleGuard } from 'src/authentication/role.guard';

@Controller('admin')
export class IndexController {
  @Role('my-admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Get()
  test(@Req() req) {
    return {
      message: 'Rota apenas para usuários Admin',
    };
  }
}
