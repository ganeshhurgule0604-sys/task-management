import { ArrayUnique, IsArray, IsDateString, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "src/user/user.schema";

export enum ProjectStatus{
    ACTIVE='active',
    INACTIVE='inActive'
}

export class ProjectCreateDto{
    @IsString()
    @IsNotEmpty()
    name!:string;

    @IsString()
    @IsOptional()
    description!:string;
    
    @IsMongoId()
    managerId!:User;

    @IsArray()
    @ArrayUnique()
    @IsMongoId()
    members!:User[];


    @IsEnum(ProjectStatus)
    status!:ProjectStatus;

    @IsDateString()
    startDate!:Date;

    @IsDateString()
    endDate!:Date;

}

export class projectDto{
    id!:string;
    name!:string;
    description!:string;
    managerId!:string;
    members!:[];
    status!:ProjectStatus;
    startDate!:Date;
    endDate!:Date;
}


export class listProjectRequiestDto{
    name!:string;
    description!:string;
    managerId!:string;
    members!:[];
    status!:ProjectStatus;
    startDate!:Date;
    endDate!:Date;
}