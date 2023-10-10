const totalController = require("../controllers/total");

module.exports = app => {
    app.get("/api/total", totalController.findAll);
    app.post("/api/total", totalController.create);
    app.get("/api/total/:id", totalController.findOne);
    app.put("/api/total/:id", totalController.update);
}