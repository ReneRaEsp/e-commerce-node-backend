"use strict";

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _database = require("./database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//iniciar dotenv para obtener las variables de entorno
_dotenv.default.config();

const PORT = process.env.PORT || 4000;

const startServer = async (app, PORT) => {
  await (0, _database.connect)().then(() => {
    app.listen(PORT, () => {
      console.log(`Server on port: ${PORT}`);
    });
  }).catch(console.log);
};

startServer(_app.default, PORT);