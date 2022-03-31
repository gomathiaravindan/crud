import { Controller, Get, Post, Body, Param, Delete,Put } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController{
  
  constructor(private service: UserService){}

  @Get(':id')
  get(@Param() params): Promise<User[]>
  {
    return this.service.getUser(params.id);
  }

  @Post()
  create(@Body() user: User)
  {
    return this.service.createUser(user);
  }

  @Put()
  update(@Body() user:User): Promise<void>{
    return this.service.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param() params): Promise<void>
  {
    return this.service.deleteUser(params.id);
  }
}