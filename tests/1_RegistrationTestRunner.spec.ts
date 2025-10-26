import { test, expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { RegistrationPage } from "../pages/RegistrationPage.pom.ts";
import { UserModel } from "../models/UserModel.ts";
import { generateRandomNumber , saveJsonData } from "../utils/Utils.ts";
import userData from "../resources/userData.json";
import * as fs from 'fs';

test.describe.serial("User Registration", () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test("Create new user", async () => {
    
    const person : UserModel = {
        firstName : faker.person.firstName(),
        lastName : faker.person.lastName() ,
        email : `abscfdhae+${generateRandomNumber(1000, 9999)}@gmail.com` ,
        password : faker.internet.password() ,
        phoneNumber : "0130" + generateRandomNumber(1000000, 9999999),
        address : faker.location.city()
    };

    const regPage = new RegistrationPage(page);
    await regPage.registerUser(person);  


  //  userData.push(person);
  //  fs.writeFileSync( "./resources/userData.json" , JSON.stringify( userData , null , 2 ) );
    saveJsonData(person , "./resources/userData.json")

    await page.waitForTimeout(5000);
  });
});