"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prisma = _interopRequireDefault(require("../../../../prisma"));

var _default = {
  Mutation: {
    toggleFollow: function () {
      var _toggleFollow = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, user, _yield$prisma$user$fi, following, existedFollowing;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                id = args.id;
                user = request.user;

                if (!(id !== user.id)) {
                  _context.next = 26;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return _prisma["default"].user.findOne({
                  where: {
                    id: user.id
                  },
                  include: {
                    following: true
                  }
                });

              case 8:
                _yield$prisma$user$fi = _context.sent;
                following = _yield$prisma$user$fi.following;
                existedFollowing = following.some(function (follow) {
                  return follow["id"] === id;
                });

                if (!existedFollowing) {
                  _context.next = 16;
                  break;
                }

                _context.next = 14;
                return _prisma["default"].user.update({
                  where: {
                    id: user.id
                  },
                  data: {
                    following: {
                      disconnect: {
                        id: id
                      }
                    }
                  }
                });

              case 14:
                _context.next = 18;
                break;

              case 16:
                _context.next = 18;
                return _prisma["default"].user.update({
                  where: {
                    id: user.id
                  },
                  data: {
                    following: {
                      connect: {
                        id: id
                      }
                    }
                  }
                });

              case 18:
                return _context.abrupt("return", true);

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](5);
                return _context.abrupt("return", false);

              case 24:
                _context.next = 27;
                break;

              case 26:
                return _context.abrupt("return", false);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 21]]);
      }));

      function toggleFollow(_x, _x2, _x3) {
        return _toggleFollow.apply(this, arguments);
      }

      return toggleFollow;
    }()
  }
};
exports["default"] = _default;