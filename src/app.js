import express, { json, urlencoded } from "express";
import router from "./routes/index.route"; 

const app = express();

//middlewares
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(`${__dirname}./../public`));

//rutas
app.use("/api", router);

export default app;
