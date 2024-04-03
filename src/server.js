import express from "express";
import viewEngine from "./configs/viewEngine.js";
import initWebRouters from "./routes/web.js";

import dotenv from "dotenv";
dotenv.config();


let app = express();

viewEngine(app);

initWebRouters(app);


let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port);
});
