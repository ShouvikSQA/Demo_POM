import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.pom.ts';
import { UserModel } from "../models/UserModel.ts";
import userData from "../resources/userData.json";


test("Login by user", async({page}) => {
    const lastUser: UserModel = userData[ userData.length - 1 ] 
    //getLastUser('./resources/users.json');



    const loginPage = new LoginPage(page);
    await loginPage.loginUser(lastUser.email, lastUser.password);
})






