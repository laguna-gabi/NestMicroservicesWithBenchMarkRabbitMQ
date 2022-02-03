import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('microservice2')
  async microservice1(@Payload() data) {
    console.log(data);
    return data;
  }
}
