import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';

import { UserModule } from '@main/factories';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RouterModule.register([{ path: 'users', module: UserModule }]),
    UserModule,
  ],
})
export class AppModule {}
