import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MICROSERVICE1',
        transport: Transport.RMQ,
        options: {
          prefetchCount: 1,
          urls: ['amqp://localhost:5672'],
          queue: 'microservice1Queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
