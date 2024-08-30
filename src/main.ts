import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Example allowing all origins and credentials
    app.enableCors();

    // Or specify more granular options
    // const corsOptions: CorsOptions = {
    //     origin: 'http://localhost:3000', // Frontend URL
    //     methods: ['GET', 'POST'],
    //     allowedHeaders: ['Content-Type', 'Authorization'],
    //     credentials: true,
    // };
    // app.enableCors(corsOptions);

    await app.listen(5000);
    console.log('Backend server is running on: http://localhost:5000');
}
bootstrap();
