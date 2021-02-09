"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prisma = _interopRequireDefault(require("../../../prisma"));

var _utils = require("../../../utils");

var _default = {
  Mutation: {
    requestSecret: function () {
      var _requestSecret = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
        var email, loginSecret, existedUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = args.email;
                loginSecret = (0, _utils.generateSecret)();
                _context.next = 4;
                return _prisma["default"].user.count({
                  where: {
                    email: email
                  }
                });

              case 4:
                existedUser = _context.sent;
                _context.prev = 5;

                if (existedUser) {
                  _context.next = 8;
                  break;
                }

                throw Error("You don't have an account yet, create one");

              case 8:
                _context.next = 10;
                return (0, _utils.sendSecretMail)(email, loginSecret);

              case 10:
                _context.next = 12;
                return _prisma["default"].user.update({
                  data: {
                    loginSecret: loginSecret
                  },
                  where: {
                    email: email
                  }
                });

              case 12:
                return _context.abrupt("return", true);

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](5);
                console.log(_context.t0);
                return _context.abrupt("return", false);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 15]]);
      }));

      function requestSecret(_x, _x2) {
        return _requestSecret.apply(this, arguments);
      }

      return requestSecret;
    }()
  }
};
exports["default"] = _default;