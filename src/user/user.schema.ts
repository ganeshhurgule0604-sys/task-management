import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Department, UserRole } from "./user.dto";
import { baseSchema } from "src/common/baseSchema";

@Schema({
    timestamps:true
})
export class User{
    @Prop()
    name!:string;

    @Prop()
    email!:string;

    @Prop({
        enum:UserRole,
        default:UserRole.EMPLOYEE
    })
    role!:UserRole

    @Prop({
        enum:Department,
        allowNull:true
    })
    department!:Department
}


export const userSchema = SchemaFactory.createForClass(User);