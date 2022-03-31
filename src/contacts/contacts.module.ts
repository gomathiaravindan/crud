import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactService } from './contacts.service';
import { ContactController } from './contacts.controller';
import { Contacts } from './contacts.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Contacts])],
    providers: [ContactService],
    controllers: [ContactController],
})


export class ContactsModule {
}
