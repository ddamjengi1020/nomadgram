"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prisma = _interopRequireDefault(require("../../../prisma"));

var _default = {
  Query: {
    seeUser: function () {
      var _seeUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
        var id;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = args.id;
                _context.next = 3;
                return _prisma["default"].user.findOne({
                  where: {
                    id: id
                  },
                  include: {
                    posts: {
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
                      }
                    },
                    followers: true,
                    following: true
                  }
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function seeUser(_x, _x2) {
        return _seeUser.apply(this, arguments);
      }

      return seeUser;
    }()
  }
};
exports["default"] = _default;