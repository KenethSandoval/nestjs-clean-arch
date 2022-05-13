import { ok } from '@application/helpers';
import { LoadUsersUC } from '@domain/use-cases';
import { Injectable } from '@nestjs/common';
import { Controller } from './controller';

@Injectable()
export class LoadUserHandler extends Controller {
  constructor(private readonly loadUserUC: LoadUsersUC) {
    super();
  }

  async perform(): Promise<Controller.Output> {
    const httpResponse = await this.loadUserUC.execute();
    return ok(httpResponse);
  }
}
