import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '@main/factories';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({ keepConnectionAlive: true }),
    RouterModule.register([{ path: 'users', module: UserModule }]),
    UserModule,
  ],
})
export class AppModule {}
