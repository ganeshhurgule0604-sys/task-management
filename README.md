# Project Management API

A RESTful API built with NestJS, MongoDB, and Mongoose for managing Users, Projects, and Tasks.

## Features

### User Management

* Create User
* Update User
* Delete User
* Get User By ID
* Get User List
* Role-based user management

### Project Management

* Create Project
* Update Project
* Delete Project
* Get Project By ID
* Get Project List
* Assign Manager
* Assign Members

### Task Management

* Create Task
* Update Task
* Delete Task
* Get Task By ID
* Get Task List
* Assign Tasks to Users
* Set Priority
* Track Status

---

## Tech Stack

* NestJS
* TypeScript
* MongoDB
* Mongoose
* Class Validator

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd project-management-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
DATABASE_STRING=mongodb://localhost:27017/project-management
```

Start the application:

```bash
npm run start:dev
```

---

## Project Structure

```text
src/
├── common/
│   ├── dto/
│   └── schemas/
│
├── user/
│   ├── user.controller.ts
│   ├── user.service.ts
│   ├── user.repository.ts
│   ├── user.schema.ts
│   └── user.dto.ts
│
├── project/
│   ├── project.controller.ts
│   ├── project.service.ts
│   ├── project.repository.ts
│   ├── project.schema.ts
│   └── project.dto.ts
│
├── task/
│   ├── task.controller.ts
│   ├── task.service.ts
│   ├── task.repository.ts
│   ├── task.schema.ts
│   └── task.dto.ts
│
└── app.module.ts
```

---

## User Roles

| Role     | Description          |
| -------- | -------------------- |
| admin    | System administrator |
| manager  | Project manager      |
| employee | Team member          |

---

## Project Status

| Status   |
| -------- |
| active   |
| inactive |

---

## Task Priority

| Priority |
| -------- |
| high     |
| medium   |
| low      |

---

## User API

### Create User

```http
POST /users
```

Request:

```json
{
  "name": "Ganesh",
  "email": "ganesh@example.com",
  "role": "employee",
  "department": "finance"
}
```

### Get Users

```http
GET /users
```

### Get User By Id

```http
GET /users/:id
```

---

## Project API

### Create Project

```http
POST /projects
```

Request:

```json
{
  "name": "CRM Project",
  "description": "Customer management system",
  "managerId": "userId",
  "members": ["userId1", "userId2"],
  "status": "active"
}
```

### Get Projects

```http
GET /projects
```

---

## Task API

### Create Task

```http
POST /tasks
```

Request:

```json
{
  "title": "Create Login API",
  "description": "Implement JWT authentication",
  "project": "projectId",
  "assignedTo": "userId",
  "assignedBy": "managerId",
  "priority": "high",
  "status": "active"
}
```

### Get Tasks

```http
GET /tasks
```

---

## Relationships

### User → Project

* One Manager can manage multiple Projects.
* One Project can have multiple Members.

### Project → Task

* One Project can contain multiple Tasks.

### User → Task

* One User can be assigned multiple Tasks.
* One User can create multiple Tasks.

---

## Validation

Request validation is implemented using `class-validator`.

Examples:

* `@IsEnum()`
* `@IsMongoId()`
* `@IsString()`
* `@IsOptional()`
* `@IsNotEmpty()`

---

## Running Tests

```bash
npm run test
```

---

## Build

```bash
npm run build
```

---

## Run Production

```bash
npm run start:prod
```

---

## Author

Ganesh Hurgule
