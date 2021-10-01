module.exports = {
    // Display the Get All User section in the Swagger UI
    get:{
        tags: ['User CRUD operations'],
        description: "Get User",
        operationId: 'getUsers',
        summary: "Get the list of all users from the database",
        parameters:[],
        responses:{
            '200':{
                description:"Users were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/User'
                        }
                    }
                }
            }
        }
    }
}