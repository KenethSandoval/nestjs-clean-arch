import { UseCasesModule } from '@domain/use-cases';
import { Module } from '@nestjs/common';
import { CreateUserHandler } from './';
import { LoadUserHandler } from './load-user-handler';

@Module({
  imports: [UseCasesModule],
  exports: [CreateUserHandler, LoadUserHandler],
  providers: [CreateUserHandler, LoadUserHandler],
})
export class ControllerHandlersModule {}
