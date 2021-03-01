import { Document } from "mongoose";

export interface ITemplate extends Document {
  name: string;
  description: string;
  tasks: string[] | ITask[];
}

export interface ITask extends Document {
  name: string;
  description: string;
  category: "A fazer" | "Em andamento" | "Concluído";
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  templates: string[] | ITemplate[];
}
