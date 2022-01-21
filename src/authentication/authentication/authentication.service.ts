import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { IKeycloakConfig } from '../../interface/IKeycloakConfig';

@Injectable()
export class AuthenticationService {
  constructor(private configService: ConfigService, private api: HttpService) {}

  async login(username: string, password: string) {
    const { url, client, secret } =
      this.configService.get<IKeycloakConfig>('keycloak');

    const { data } = await firstValueFrom(
      this.api.post(
        url,
        new URLSearchParams({
          client_id: client,
          client_secret: secret,
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );

    return data;
  }
}
