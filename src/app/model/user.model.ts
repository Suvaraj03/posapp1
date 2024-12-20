export interface IUser {
    email:string
    password:string
}

export class User implements IUser
{
    id?:number;
    name: string="";
    password: string="";
    phone:string ="";
    email:string="";
    role:string="";
    token? :string="";

    constructor(name:string,password:string,phone:string,email:string,role:string,id?:number,token?:string)
    {
        this.name=name;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.role=role;
        if(id)
        {
            this.id=id
        }
        if(token)
        {
            this.token=token
        }
    }


}