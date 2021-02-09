"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _middlewares = require("../../../middlewares");

var _prisma = _interopRequireDefault(require("../../../prisma"));

var _default = {
  Query: {
    me: function me(_, __, _ref) {
      var request = _ref.request;
      (0, _middlewares.isAuthenticated)(request);
      var user = request.user;
      return _prisma["default"].user.findOne({
        where: {
          id: user.id
        },
        include: {
          posts: {
            include: {
              user: true,
              files: true,
              likes: {
                include: {
                  user: true
                }
              },
              comments: {
                include: {
                  user: true
                }
              }
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