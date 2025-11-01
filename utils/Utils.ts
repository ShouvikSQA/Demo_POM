import { test, request } from "@playwright/test";
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

async function fetchID() {
    const api = await request.newContext({
      baseURL: 'https://gmail.googleapis.com',
      extraHTTPHeaders: {
        "Accept" : "*/*",
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${process.env.google_access_token}`,
      }
    });
  
    const response = await api.get("/gmail/v1/users/me/messages");
    //const data = response.ok() ? await response.json() : null;
    const data = await response.json();
  
    const emailID = data.messages[0].id;
  
    return emailID;
  }
  

export  async function fetchEmail() {
    
    const emailId = await fetchID();
   console.log(typeof(emailId));
    const api = await request.newContext({
      baseURL: 'https://gmail.googleapis.com',
      extraHTTPHeaders: {
        "Accept" : "*/*",
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${process.env.google_access_token}`
      }
    });
  
    const response = await api.get("/gmail/v1/users/me/messages/"+ emailId);
    //const data = response.ok() ? await response.json() : null;
  
  
    const resJson = await  response.json();
    const latestEmail = resJson.snippet
    return latestEmail;
  }