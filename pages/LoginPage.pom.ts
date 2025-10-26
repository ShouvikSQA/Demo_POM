import { Page } from "@playwright/test";

export class LoginPage{

    constructor(private page: Page) {}


    async navigate() {
    await this.page.goto("/");
    }
    
    async fillEmail(email: string) {

    await this. page.getByRole("textbox" , {  name : "Email" }).fill(email);
    }

   async fillPassword(password: string) {
    await this.page.getByRole("textbox" , {  name : "Password" }).fill(password);
   }

  async clickLoginButton() {
    await this.page.getByRole("button" , {  name : "LOGIN" }).click();
  }


 

    async loginUser( email: string, password: string ){
        
        await this.navigate();
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginButton(); 
    }
 

}

