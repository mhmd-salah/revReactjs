export interface IuserData {
  username: string;
  email: string;
  password: string;
} 
export interface IformInputList {
  label:string
  type:string
  id:string
  name:keyof IuserData;
}