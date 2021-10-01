module.exports = {
    // Display the Delete section in the Swagger UI
    delete:{
        tags: ['User CRUD operations'],
        description: "Deleting a User",
        operationId: "deleteUser",
        summary: "Delete the user based on UUID from the database",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "Deleting a done User"
            }
        ],
        responses:{
            '200':{
                description:"User deleted successfully"
            },
            '404':{
                description:"User not found"
            },
            '500':{
                description:"Server error"
            }
        }
    }
}