const express = require("express");
const cors = require("cors");
const app = express();

app.use(
    cors({origin: "http://localhost:5173",}),
    express.json(),
    express.urlencoded({extended: true})
)

require("./config/mongoose");

require("./routes/routes")(app);
require("./routes/routes.total")(app);

app.listen(8000, ()=>console.log("Server listening on port 8000"))