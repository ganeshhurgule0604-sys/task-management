import { IsEmail, IsEnum, IsOptional } from 'class-validator';

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
}

export enum Department {
  HR = 'hr',
  FINANCE = 'finance',
  QES = 'qes',
  DESCOVERY = 'discovery',
}

export class CreateUserDto {
  @IsOptional()
  name?: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsEnum(Department)
  department!: Department;
}

export class UserDto {
  id!: string;
  name!: string;
  email!: string;
  role!: UserRole;
  department!: Department;
}


export class userRequestDto{
    name!:string;

    email!:string;

    role!:UserRole;

    department!:Department
}