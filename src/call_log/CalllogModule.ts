



import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Call_logService } from './call_log.service';
import { Call_logController } from './call_log.controller';
import { Calllog } from './call_log.entity';



@Module({
    imports: [TypeOrmModule.forFeature([Calllog])],
    providers: [Call_logService],
    controllers: [Call_logController],
})
export class CalllogModule {}
