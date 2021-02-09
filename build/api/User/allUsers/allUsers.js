"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prisma = _interopRequireDefault(require("../../../prisma"));

var _default = {
  Query: {
    allUsers: function allUsers() {
      return _prisma["default"].user.findMany({
        include: {
          likes: true,
          comments: {
            include: {
              user: true
            }
          },
          followers: true,
          following: true
        }
      });
    }
  }
};
exports["default"] = _default;