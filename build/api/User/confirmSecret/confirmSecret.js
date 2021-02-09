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
    confirmSecret: function () {
      var _confirmSecret = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
        var secret, email, user, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                secret = args.secret, email = args.email;
                _context.next = 3;
                return _prisma["default"].user.findOne({
                  where: {
                    email: email
                  }
                });

              case 3:
                user = _context.sent;

                if (!(user.loginSecret === secret)) {
                  _context.next = 17;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return _prisma["default"].user.update({
                  where: {
                    id: user.id
                  },
                  data: {
                    loginSecret: ""
                  }
                });

              case 8:
                token = (0, _utils.generateToken)(user.id);
                return _context.abrupt("return", token);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);
                console.log(_context.t0);

              case 15:
                _context.next = 18;
                break;

              case 17:
                throw Error("Wrong email/secret combination");

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 12]]);
      }));

      function confirmSecret(_x, _x2) {
        return _confirmSecret.apply(this, arguments);
      }

      return confirmSecret;
    }()
  }
};
exports["default"] = _default;