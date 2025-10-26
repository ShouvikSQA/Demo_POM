
import * as fs from 'fs';
import { UserModel }  from '../models/UserModel.ts';
import userData from "../resources/userData.json";

export function generateRandomNumber(min:number,max:number){
    return (Math.floor(Math.random()*(max-min)+min)); 
}




export function saveJsonData(jsonObject: UserModel, fileUrl: string) : void {
//   userData.push( jsonObject  );  
  let dataArray: UserModel[] = userData;
  dataArray.push(jsonObject);
  fs.writeFileSync( "./resources/userData.json" , JSON.stringify( dataArray , null , 2 ) );
  
}

