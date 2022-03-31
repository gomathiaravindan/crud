import { Controller, Get, Post, Body, Param, Delete,Put } from '@nestjs/common';
import { Call_logService } from './call_log.service';
import { Calllog } from './call_log.entity';

@Controller('calllogs')
export class Call_logController{
  calllogsService: any;
  
  constructor(private service: Call_logService){}

  /*@Get(':id')
  get(@Param() params): Promise<Calllog[]>
  {
    return this.calllogsService.getUser(params.id);
  }
  */
 @Get('/')
 findAll() : Calllog[]{
  return this.calllogsService.findAll();

  }

  @Post()
  create(@Body() user: Calllog) : Promise<void>
  {
    return this.calllogsService.createUser(user);
  }

  @Put()
  update(@Body() user:Calllog): Promise<void>{
    return this.service.updateUser(user);
  }

  /*@Delete(':id')
  deleteUser(@Param() params): Promise<void>
  {
    return this.service.deleteCalllog(params.id);
  }*/
}