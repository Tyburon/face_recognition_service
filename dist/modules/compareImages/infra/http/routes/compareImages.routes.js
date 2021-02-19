"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _CompareController = _interopRequireDefault(require("../controller/CompareController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const compareImagesRouter = (0, _express.Router)();
const compareController = new _CompareController.default();
compareImagesRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.QUERY]: {
    imagelink1: _celebrate.Joi.string().required(),
    imagelink2: _celebrate.Joi.string().required()
  }
}), compareController.compare);
var _default = compareImagesRouter;
exports.default = _default;