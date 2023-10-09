const taskController = require("../controllers/points");

module.exports = app => {
    app.get("/api/task", taskController.findAll);
    app.post("/api/task", taskController.create);
    app.get("/api/task/:id", taskController.findOne);
    app.put("/api/task/:id", taskController.update);
    app.delete("/api/task/:id", taskController.delete);
}