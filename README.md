# Benchmark test for RabbitMQ microservice communication.

in this project we have a simple architecture with one api gateway and two microservices.

there is only one route in the `gateway` and it send the data to queue to `microservice1`, then the `microservice1` send the data to queue to `microservice2` simulating a microservice making request to another one and then returns the data to `microservice1` that returns the data to the `gateway`that returns it to the client.

to bench mark the api i used [autocannon](https://github.com/mcollina/autocannon?ref=thechiefio) and thous are the results

```
$ autocannon http://localhost:3011

Running 10s test @ http://localhost:3011
10 connections
```

| SynStattax | 2.5% |  50%  | 97.5% |  99%  |   Avg    |  Stdev  |  Max  |
| :--------: | :--: | :---: | :---: | :---: | :------: | :-----: | :---: |
|  Latency   | 8 ms | 11 ms | 28 ms | 35 ms | 12.55 ms | 5.12 ms | 66 ms |

|   Stat    |   1%   |  2.5%  |  50%   | 97.5%  |  Avg   |  Stdev  |  Min   |
| :-------: | :----: | :----: | :----: | :----: | :----: | :-----: | :----: |
|  Req/Sec  |  717   |  717   |  765   |  820   |  765   |  29.8   |  717   |
| Bytes/Sec | 179 kB | 179 kB | 191 kB | 204 kB | 190 kB | 7.44 kB | 179 kB |
