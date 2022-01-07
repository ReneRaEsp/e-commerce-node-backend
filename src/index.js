import app from "./app";
import dotenv from "dotenv";
import { connect } from "./database/database";

//iniciar dotenv para obtener las variables de entorno
dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async (app, PORT) => {
  await connect().then(() => {
    app.listen(PORT, () => {
      console.log(`Server on port: ${PORT}`);
    });
  }).catch(console.log);
};

startServer(app, PORT);
