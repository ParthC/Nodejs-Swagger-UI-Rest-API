const express = require("express");
const {nanoid} = require('nanoid');
const router = express.Router();

const idLength = 8;

// Creating all the type of Request => (GETALL, GET, POST, PATCH, DELETE) To the User Table.  


// get request to get all the users from the Database.
router.get('/', (req,res) => {

    let Users = req.app.db.get('users').value();

    return res.send(Users);

});






// Get request to access to particular User Based on UUID from the database.
router.get('/:id', (req,res) => {

    let user = req.app.db.get('users').find({ 
        id: req.params.id
    }).value();
    
    if(!user){

        res.sendStatus(404);

        return res.send({
            message: "users cannot be found",
            internal_code: "Invalid uuid"
        });

    };

    return res.send(user);

});





// Create new User in the database as per JSON body request. 
router.post('/', (req,res) => {

    // Creating Unique UUID of the User.
    let user = {
        id:nanoid(idLength),
        ...req.body
    };

    try {

        req.app.db.get("users").push(user).write();
        
        return res.sendStatus(201).send("New User Added successfully");

    }catch(error){

        return res.sendStatus(500).send(error);
    }
});




// Update User Request Based on UUID in the database.
router.put('/:id', (req,res) => {

    // find User based on UUID.
    let user = req.app.db.get("users").find({
        id: req.params.id
    }).value();

    if(!user){

        return res.sendStatus(404);

    };

    // Update that User based on UUID.
    try {

        req.app.db.get("users").find({
            id:req.params.id
        })
        .assign({ completed: !user['completed'] })
        .write();

        return res.send("user updated");

    } catch(error) {

        res.sendStatus(500);

        return res.send(error);

    };

});




// Delete the User Based on UUID from the database.
router.delete('/:id', (req,res) => {

    //find user from the list.
    let user = req.app.db.get("users").find({
        id:req.params.id
    }).value();

    if(!user){

        return res.sendStatus(404);

    };

    // delete the User.
    try {
        req.app.db.get("users").remove({
            id:req.params.id
        })
        .write();

        return res.send("user deleted");

    } catch(error) {

        return res.sendStatus(500);

    }

});

module.exports = router;