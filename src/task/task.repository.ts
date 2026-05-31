import { InjectModel } from "@nestjs/mongoose";
import { Task } from "./task.schema";
import { Model } from "mongoose";
import { CreateTaskDto, TaskListRequestDto } from "./task.dto";
import { filter } from "rxjs";

export class TaskRepository{
    constructor(
        @InjectModel(Task.name)
        private readonly taskRepo:Model<Task>
    ){}

async updateTask(id:string,dto:Partial<CreateTaskDto>){
    return this.taskRepo.findByIdAndUpdate({
        id,dto,new:true
    })
}    
async getTaskDetails(id:string){
    return this.taskRepo.findById(id)
}
async getList(dto: TaskListRequestDto) {
  const filter: any = {};

  if (dto.title) {
    filter.title = {
      $regex: dto.title,
      $options: 'i',
    };
  }

  if (dto.priority) {
    filter.priority = dto.priority;
  }

  if (dto.status) {
    filter.status = dto.status;
  }

  if (dto.project) {
    filter.project = dto.project;
  }

  if (dto.assignedTo) {
    filter.assignedTo = dto.assignedTo;
  }

  if (dto.assignedBy) {
    filter.assignedBy = dto.assignedBy;
  }

  return this.taskRepo.find(filter);
}
}