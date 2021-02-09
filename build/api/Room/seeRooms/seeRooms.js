"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prisma = _interopRequireDefault(require("../../../prisma"));

var _default = {
  Query: {
    seeRooms: function seeRooms(_, __, _ref) {
      var request = _ref.request,
          isAuthenticated = _ref.isAuthenticated;
      isAuthenticated(request);
      var user = request.user;
      return _prisma["default"].room.findMany({
        where: {
          participants: {
            some: {
              id: user.id
            }
          }
        }
      });
    }
  }
};
exports["default"] = _default;