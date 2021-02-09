"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prisma = _interopRequireDefault(require("../../../prisma"));

var _default = {
  Query: {
    seeFeed: function () {
      var _seeFeed = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, __, _ref) {
        var request, isAuthenticated, user, following;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                user = request.user;
                _context.next = 5;
                return _prisma["default"].user.findOne({
                  where: {
                    id: user.id
                  }
                }).following();

              case 5:
                following = _context.sent;
                return _context.abrupt("return", _prisma["default"].post.findMany({
                  where: {
                    OR: [{
                      userId: {
                        "in": (0, _toConsumableArray2["default"])(following.map(function (user) {
                          return user.id;
                        }))
                      }
                    }, {
                      userId: user.id
                    }]
                  },
                  include: {
                    files: true,
                    likes: {
                      include: {
                        user: true
                      }
                    },
                    user: true,
                    comments: {
                      include: {
                        user: true
                      }
                    }
                  },
                  orderBy: {
                    createAt: "desc"
                  }
                }));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function seeFeed(_x, _x2, _x3) {
        return _seeFeed.apply(this, arguments);
      }

      return seeFeed;
    }()
  }
};
exports["default"] = _default;