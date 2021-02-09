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
    deletePost: function () {
      var _deletePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, user, verifyPost;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                id = args.id;
                user = request.user;
                _context.next = 6;
                return _prisma["default"].post.count({
                  where: {
                    userId: user.id,
                    id: id
                  }
                });

              case 6:
                verifyPost = _context.sent;

                if (!verifyPost) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", _prisma["default"].$executeRaw("DELETE FROM \"Post\" WHERE \"id\"='".concat(id, "'")));

              case 11:
                throw Error("Not found the Post");

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function deletePost(_x, _x2, _x3) {
        return _deletePost.apply(this, arguments);
      }

      return deletePost;
    }()
  }
};
exports["default"] = _default;