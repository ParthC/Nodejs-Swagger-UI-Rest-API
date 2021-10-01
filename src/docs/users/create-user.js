
module.exports = {
    // Display the POST section in the Swagger UI
    post:{
        tags:['User CRUD operations'],
        description: "Create user",
        operationId: "createUser",
        summary: "Create the new user in the database",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/UserInput'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "User created successfully"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}