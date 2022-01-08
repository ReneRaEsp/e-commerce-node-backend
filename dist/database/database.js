"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const DB_URL = process.env.DB_URL;

const connect = async () => {
  await _mongoose.default.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(mongoose => console.log(`conectado a la BD, puerto:`, mongoose.connections[0].port)).catch(console.log);
};

exports.connect = connect;