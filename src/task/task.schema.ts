import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { ProjectStatus } from "src/project/project.dto";
import { Project } from "src/project/project.schema";
import { User } from "src/user/user.schema";
import { Priority } from "./task.dto";

@Schema({
    timestamps:true
})
export class Task{
    @Prop({
        required:true
    })
    title!:string;

    @Prop()
    description!:string;


    @Prop({
        type:Types.ObjectId,
        ref:Project.name,
        required:false
    })
    project!:Project;


    @Prop({
        type:Types.ObjectId,
        ref:User.name,
        required:true
    })
    assignedTo!:User

    @Prop({
            type:Types.ObjectId,
            ref:User.name,
            required:true
        })
    assignedBy!:User

    
    @Prop({
        enum:Priority,
        default:Priority.LOW
    })
    priority!:Priority


    @Prop({
        enum:ProjectStatus,
        default:ProjectStatus.ACTIVE
    })
    status!:ProjectStatus
}


export const  TaskSchema = SchemaFactory.createForClass(Task);