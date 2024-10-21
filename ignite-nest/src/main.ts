import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // for validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 쿼리 매개변수를 자동으로 클래스 인스턴스로 변환
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('Codefactory Ignite')
    .setDescription('Codefactory Ignite')
    .setVersion('v1')
    .build();
  const documents = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui/index.html', app, documents, {
    swaggerOptions: {
      filter: true,
      displayRequestDuration: true,
    },
  });

  await app.listen(3000);
}

bootstrap();
