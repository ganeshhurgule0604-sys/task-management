import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { User } from 'src/user/user.schema';
import { ProjectStatus } from './project.dto';

@Schema({
  timestamps: true,
})
export class Project {
  @Prop({ required: true })
  name!: string;

  @Prop()
  description!: string;

  @Prop({
    type: Types.ObjectId,
    ref: User.name,
    required: true,
  })
  managerId!: User;

  @Prop([
    {
      type: Types.ObjectId,
      ref: User.name,
    },
  ])
  members!: User[];

  @Prop({
    enum: ProjectStatus,
    default: ProjectStatus.ACTIVE,
  })
  status!: ProjectStatus;

  @Prop()
  startDate!: Date;

  @Prop()
  endDate!: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);