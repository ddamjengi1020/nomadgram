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
  Mutation: {
    createAccount: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
        var userName, email, firstName, lastName, bio, avatar, existedFromEmail, existedFromUserName;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userName = args.userName, email = args.email, firstName = args.firstName, lastName = args.lastName, bio = args.bio, avatar = args.avatar;
                _context.next = 3;
                return _prisma["default"].user.count({
                  where: {
                    email: email
                  }
                });

              case 3:
                existedFromEmail = _context.sent;
                _context.next = 6;
                return _prisma["default"].user.count({
                  where: {
                    userName: userName
                  }
                });

              case 6:
                existedFromUserName = _context.sent;

                if (!(existedFromEmail && existedFromUserName)) {
                  _context.next = 11;
                  break;
                }

                throw Error("Email or Username are already taken");

              case 11:
                if (!existedFromEmail) {
                  _context.next = 15;
                  break;
                }

                throw Error("This Email is already taken");

              case 15:
                if (!existedFromUserName) {
                  _context.next = 19;
                  break;
                }

                throw Error("This Username is already taken");

              case 19:
                _context.prev = 19;
                _context.next = 22;
                return _prisma["default"].user.create({
                  data: {
                    userName: userName,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    bio: bio,
                    avatar: avatar
                  }
                });

              case 22:
                return _context.abrupt("return", true);

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](19);
                return _context.abrupt("return", false);

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[19, 25]]);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }
};
exports["default"] = _default;