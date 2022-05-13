/* eslint-disable @typescript-eslint/no-namespace */
import { ok } from '@application/helpers';
import { Controller } from '@application/controllers';
import { CreateUserUC } from '@domain/use-cases';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserHandler extends Controller {
  constructor(private readonly createUserUC: CreateUserUC) {
    super();
  }

  async perform(input: CreateUserHandler.Input): Promise<Controller.Output> {
    const httpResponse = await this.createUserUC.execute(input);
    return ok(httpResponse);
  }
}

export namespace CreateUserHandler {
  export type Input = { name: string; email: string };
}
