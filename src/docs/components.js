
module.exports = {
    components:{
        schemas:{
            id:{
                type:'string',
                description:"An id of a User",
                example: "tyvgf"
            },
            User:{
                type:'object',
                properties:{
                    id:{
                        type:'string',
                        description:"User identification number",
                        example:"ytyvgh"
                    },
                    title:{
                        type:'string',
                        description:"User's title",
                        example:"Coding in JavaScript"
                    },
                    completed:{
                        type:"boolean",
                        description:"The status of the User",
                        example:false
                    }
                }
            },
            UserInput:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"User's title",
                        example:"Coding in Node JavaScript"
                    },
                    completed:{
                        type:"boolean",
                        description:"The status of the User",
                        example:false
                    }
                }
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}