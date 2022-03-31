import { Controller, Get, Post, Body, Param, Delete,Put } from '@nestjs/common';
import { ContactService } from './contacts.service';
import { Contacts } from "./contacts.entity";

@Controller('contacts')
export class ContactController{
  contactsService: any;
  
  constructor(private service: ContactService){}

  @Get(':id')
  get(@Param() params): Promise<Contacts[]>
  {
    return this.contactsService.getUser(params.id);
  }

  @Post()
  create(@Body() user: Contacts)
  {
    return this.contactsService.createUser(user);
  }

  @Put()
  update(@Body() user:Contacts): Promise<void>{
    return this.service.updateUser(user);
  }

  /*@Delete(':id')
  deleteUser(@Param() params): Promise<void>
  {
    return this.service.deleteCalllog(params.id);
  }*/
}