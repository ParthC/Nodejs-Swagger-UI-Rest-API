module.exports = {
    // Display the PUT section in the Swagger UI
    put:{
        tags:['User CRUD operations'],
        description: "Update User",
        operationId: "updateUser",
        summary: "Update the user based on UUID in the database",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "Id of User to be updated"
            }
        ],
        responses:{

            '200':{
                description: "User updated successfully"
            },
            '404':{
                description: "User not found"
            },
            '500':{
                description: "Server error"
            }
            
        }
    }
}