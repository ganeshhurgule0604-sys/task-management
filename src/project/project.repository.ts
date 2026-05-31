import { InjectModel } from "@nestjs/mongoose";
import { Project } from "./project.schema";
import { Model, model } from "mongoose";
import { listProjectRequiestDto, ProjectCreateDto, projectDto } from "./project.dto";

export class ProjectRepository{
constructor(
    @InjectModel(Project.name)
    private readonly projectRepo:Model<Project>
){}

createProject(dto:ProjectCreateDto){
    return this.projectRepo.create(dto);
}

updateProject(id:string,dto:Partial<ProjectCreateDto>){
    return this.projectRepo.findByIdAndUpdate({
        id,dto,new:true
    })
}

getProjectById(id:number){
    return this.projectRepo.findById(id)
}

getList(dto:listProjectRequiestDto){
    const {name,managerId,members,status} =dto;

    const filter :any={};
    if(name){
        filter.name=name;
    }

    if(managerId){
        filter.managerId =managerId
    }

    if(members){

        filter.members={
            $in:members
        }
    }
    if(status){
        filter.status=status
    }
    return this.projectRepo.find(filter);

}

deleteProject(id:string){
    return this.projectRepo.findByIdAndDelete(id)
}
}