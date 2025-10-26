import {test , expect} from "@playwright/test";


test("User List", async({request}) => {
    
    // reurns response in Object type
    let response = await request.get("https://reqres.in/api/users?page=2" , {
        headers : {
            'x-api-key': 'reqres-free-v1',
            Accept : "application/json",
        }
    });
    console.log( await response.json() );
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

