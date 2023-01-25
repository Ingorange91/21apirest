export interface AuthInput{
    id?:String,
    email:String,
    password:String,
    returnSecureToken: boolean

}

export interface AuthOutput{
    id?:String,
    kind:String,
    localId:string,
    email:String,
    displayName:String,
    idToken:string,
    registered:boolean,
    refreshToken: String,
    expireIn:String
    
}