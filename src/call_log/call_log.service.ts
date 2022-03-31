import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository} from 'typeorm';
import {Calllog} from './call_log.entity';

@Injectable()
export class Call_logService {
    public calllogs: Calllog[] = [];

    deleteCalllog: any;

    constructor(@InjectRepository(Calllog) private usersRepository: Repository<Calllog>) {}
    create(call: Calllog) : Calllog{
        this.calllogs.push(call);
        return call;
    }
    async getUsers(call: Calllog) : Promise<Calllog[]>{
        return await this.usersRepository.find();
    }

    async getUser(_id:number): Promise<Calllog[]>{
        return await this.usersRepository.find({
            select: ["Contact_id", "Name", "Phone", "Call_type", "Duration", "time"],
        });
    }
    async updateUser(call: Calllog){
        this.usersRepository.save(call)
    }

    /*async deleteUser(call: Calllog)
    {
        this.usersRepository.delete(call);
    }*/
}