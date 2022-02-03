import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('MICROSERVICE1') private client: ClientProxy) {}

  @Get()
  getHello() {
    return this.client.send('microservice1', { data: 'test' });
  }
}
