const getUsers = require('./get-users');
const getUser = require('./get-user');
const createUser = require('./create-user');
const updateUser = require('./update-user');
const deleteUser = require('./delete-user');

module.exports = {
    paths:{
        '/users':{
            ...getUsers,
        },
        '/user':{
            ...createUser
        },
        '/users/{id}':{
            ...getUser,
            ...updateUser,
            ...deleteUser
        }
    }
}