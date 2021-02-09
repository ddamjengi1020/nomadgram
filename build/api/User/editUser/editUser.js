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
    editUser: function () {
      var _editUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, userName, email, firstName, lastName, bio, avatar, user, editUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                userName = args.userName, email = args.email, firstName = args.firstName, lastName = args.lastName, bio = args.bio, avatar = args.avatar;
                user = request.user;
                _context.next = 6;
                return _prisma["default"].user.update({
                  where: {
                    id: user.id
                  },
                  data: {
                    userName: userName,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    bio: bio,
                    avatar: avatar
                  }
                });

              case 6:
                editUser = _context.sent;
                return _context.abrupt("return", editUser);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function editUser(_x, _x2, _x3) {
        return _editUser.apply(this, arguments);
      }

      return editUser;
    }()
  }
};
exports["default"] = _default;