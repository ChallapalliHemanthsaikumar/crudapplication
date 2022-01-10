const controller = require("../controllers/project.controller");



module.exports = function(app){
    
    app.post("/add",controller.createProject);
    app.get("/list",controller.getlist);
    app.post("/edit",controller.Edititem);
    app.post("/delete",controller.Deleteitem);
    app.post("/get",controller.get);
   

  
};