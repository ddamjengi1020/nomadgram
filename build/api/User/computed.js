"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prisma = _interopRequireDefault(require("../../prisma"));

var _default = {
  User: {
    fullName: function fullName(parent) {
      return "".concat(parent.firstName, " ").concat(parent.lastName);
    },
    isFollowing: function isFollowing(parent, _, _ref) {
      var request = _ref.request;
      var user = request.user;
      var parentId = parent.id;
      return _prisma["default"].user.count({
        where: {
          id: parentId,
          followers: {
            some: {
              id: user.id
            }
          }
        }
      });
    },
    isSelf: function isSelf(parent, _, _ref2) {
      var request = _ref2.request;
      var user = request.user;
      var parentId = parent.id;
      return user.id === parentId;
    }
  }
};
exports["default"] = _default;