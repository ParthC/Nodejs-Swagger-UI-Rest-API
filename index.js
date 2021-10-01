// Declaring all the dependices which is used for this module to demo Swagger-UI.
const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const {join} = require('path');
const morgan = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const docs = require('./src/docs');
const userRouter = require('./src/routes/users');

const adapter = new FileSync(join(__dirname,'..','db.json'));
const db = low(adapter);
db.defaults({ users:[] }).write();    
const app = express();
const PORT = process.env.PORT || 4000;

// application configuration.
app.db = db;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(cors());
app.use('/users',userRouter);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

//initializing the application.
async function initialize(){    
    app.listen(PORT);
};

initialize()
.finally(() => console.log(`app started on port:${PORT}`));