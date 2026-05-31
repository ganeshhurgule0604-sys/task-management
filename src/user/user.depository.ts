import { User } from "./user.schema";
import { Model, } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto, Department, userRequestDto } from "./user.dto";

export class UserRepository {
    constructor(
        @InjectModel(User.name)
        private readonly userRepo: Model<User>
    ) { }


    createUser(dto: CreateUserDto) {
        return this.userRepo.create(dto);
    }

    updateDto(id:string,dto:Partial<CreateUserDto>) {
        return this.userRepo.findByIdAndUpdate(id,dto,{
            new:true
        })
    }

    delete(id) {
        return this.userRepo.deleteOne(id)
    }

    getById(id: number) {
        return this.userRepo.findById(id);
    }


    async getList(dto: userRequestDto) {
        const { name, email, role, department } = dto;

        const filter: any = {};

        if (name) {
            filter.name = name;
        }

        if (email) {
            filter.email = email;
        }

        if (role) {
            filter.role = role;
        }

        if (department) {
            filter.department = department;
        }

        return this.userRepo.find(filter);
    }
}