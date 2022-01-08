"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _category = _interopRequireDefault(require("../controllers/category.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _expressPromiseRouter.default)();
const {
  add,
  queryById,
  queryByName,
  list,
  update,
  remove,
  activate,
  deactivate
} = _category.default;
router.post("/add", add);
router.get("/query/:id", queryById);
router.get("/query-name/:name", queryByName);
router.get("/list", list);
router.put("/update", update);
router.delete("/remove", remove);
router.put("/activate", activate);
router.put("/deactivate", deactivate);
var _default = router;
exports.default = _default;