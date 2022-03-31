import { Module } from '@nestjs/common';
import { TypeOrmModule }  from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from "./contacts/contacts.module";
import { CalllogModule } from "./call_log/CalllogModule";
import 'reflect-metadata';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: "mysql",
      host:"127.0.0.1",
      port: 3306,
      username:"root",
      password:null,
      database:"calllogdb",
      entities: ["src/**/**.entity{.ts,.js"],
      synchronize:true
  }),ContactsModule,CalllogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
