
export interface contactUsInput{
    id?:string
    name:string
    phone:string;
    email:string;
    description:string;
    read:boolean;
    date:Date;
}

export interface contactUsRes{
    name:string
}