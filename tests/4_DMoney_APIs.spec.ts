import {test , expect} from "@playwright/test";

let baseUrl = "http://dmoney.roadtocareer.net";
let token;


test.only("Admin can login successfully with valid Creds", async({request}) => {
    
    
    let response = await request.post(baseUrl+"/user/login" , {
        data : {
                "email":"admin@roadtocareer.net",
                "password":"1234"
        },

        headers : {
            "Content-Type": "application/json",
        }
    });
    console.log( await response.json() );

    const res =  await response.json();

    expect( res. message ).toContain("Login successful");

    token = res.token;

    console.log(token);

} )




let userID : string ;
test( "Create User", async({request}) => {

const response = await request.post("https://reqres.in/api/users", {
        data : {
           "name": "morpheus",
            "job": "leader",
        },
        headers : {
            'x-api-key': 'reqres-free-v1',
            Accept : "application/json",
        }

    }  ) ;

    console.log( await response.json());
    const res =  await response.json();
    userID  = res.id; 

    console.log(" User ID : ", userID );

    expect(response.status()).toBe(201);

} )



test( "Update User", async({request}) => {

    const response = await request.put("https://reqres.in/api/users/"+ userID, {
            data : {
               "name": "Shouvik",
                "job": "QA",
            },
            headers : {
                'x-api-key': 'reqres-free-v1',
                Accept : "application/json",
            }
    
        }  ) ;
    
        console.log( await response.json());
        expect(response.status()).toBe(200);
    
 } );

