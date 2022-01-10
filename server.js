const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/dbconfig");

 




 
const app = express();

var allowedOrigins = ['http://localhost:3001','http://localhost:3002',
                      ];
app.use(cors({  
  origin: function(origin, callback){
    // allow requests with no origin     
    // (like mobile apps or curl requests)    
    if(!origin) 
      return callback(null, true);    
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +                
          'allow access from the specified Origin.';      
      return callback(new Error(msg), false);    
    }    
    return callback(null, true);  
  }
}));

//app.use(cors());

app.use(express.json({limit: '200mb'}));
app.use(express.urlencoded({limit: '200mb',extended:false}));
 const db = require("./app/models");
const { json } = require("body-parser");
// const Role = db.role;
// const User = db.user;
 
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
  
  

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to student  application." });
});



// routes
//authenticate()
require("./app/routes/project.routes")(app);




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


