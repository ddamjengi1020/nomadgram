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
    searchUser: function () {
      var _searchUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
        var term, resultUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                term = args.term;
                resultUser = [];

                if (!(term !== "")) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return _prisma["default"].user.findMany({
                  where: {
                    OR: [{
                      userName: {
                        contains: term
                      }
                    }, {
                      firstName: {
                        contains: term
                      }
                    }, {
                      lastName: {
                        contains: term
                      }
                    }]
                  }
                });

              case 5:
                resultUser = _context.sent;

              case 6:
                return _context.abrupt("return", resultUser);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function searchUser(_x, _x2) {
        return _searchUser.apply(this, arguments);
      }

      return searchUser;
    }()
  }
};
exports["default"] = _default;