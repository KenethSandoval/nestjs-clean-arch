import { CreateUserHandler, LoadUserHandler } from '@application/controllers';
import { adaptNestRouter } from '@main/adapters';
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { RequestHandler } from '@nestjs/common/interfaces';
import { Response } from 'express';

@Controller()
export class UserRoutes {
  constructor(
    private readonly createUserHandler: CreateUserHandler,
    private readonly loadUserHandler: LoadUserHandler,
  ) {}

  @Post()
  async create(
    @Body() body: CreateUserHandler.Input,
    @Res() res: Response,
  ): Promise<RequestHandler> {
    return adaptNestRouter(this.createUserHandler)(body, res);
  }

  /*@Get()
  async load(
    @Body() body: CreateUserHandler.Input,
    @Res() res: Response,
  ): Promise<RequestHandler> {
    return adaptNestRouter(this.loadUserHandler)(body, res);
  }*/
}
