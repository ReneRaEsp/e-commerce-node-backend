"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressPromiseRouter = _interopRequireDefault(require("express-promise-router"));

var _category = _interopRequireDefault(require("./category.route"));

var _product = _interopRequireDefault(require("./product.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _expressPromiseRouter.default)();
router.use("/category", _category.default);
router.use("/product", _product.default);
var _default = router;
exports.default = _default;