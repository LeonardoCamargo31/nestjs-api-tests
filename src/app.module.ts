import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { MongooseModule } from '@nestjs/mongoose';

const uri = `mongodb://root:root@db:27017/app?authSource=admin`;

@Module({
  imports: [
    MongooseModule.forRoot(uri), // bd criado se não existe
    TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
