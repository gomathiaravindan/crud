import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository} from 'typeorm';
import { Contacts } from "./contacts.entity";

@Injectable()
export class ContactService {
    createUser: any;
    deleteContact: any;
    public contacts: Contacts[] = [];
    constructor(@InjectRepository(Contacts) private usersRepository: Repository<Contacts>) {}

    create(contacts: Contacts): Contacts{
        this.contacts.push(contacts);
        return contacts;
    }
    async getUsers(contact: Contacts) : Promise<Contacts[]>{
        return await this.usersRepository.find();
    }

    async getUser(_id:number): Promise<Contacts[]>{
        return await this.usersRepository.find({
            select: ["Contact_id", "Name", "Phone", "Address", "Email", "Notes"],
        });
    }
    async updateUser(contact: Contacts){
        this.usersRepository.save(contact)
    }

    /*async deleteUser(call: Contacts)
    {
        this.usersRepository.delete(call);
    }*/
}