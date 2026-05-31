import { Prop } from "@nestjs/mongoose";
import { IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ProjectStatus } from "src/project/project.dto";

export enum Priority{
    HIGH='high',
    LOW='low',
    MEDIUM='medium',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsMongoId()
  project?: string;

  @IsMongoId()
  assignedTo!: string;

  @IsMongoId()
  assignedBy!: string;

  @IsOptional()
  @IsEnum(Priority)
  priority?: Priority;

  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;
}



export class TaskListRequestDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsEnum(Priority)
  priority?: Priority;

  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @IsOptional()
  @IsMongoId()
  project?: string;

  @IsOptional()
  @IsMongoId()
  assignedTo?: string;

  @IsOptional()
  @IsMongoId()
  assignedBy?: string;
}