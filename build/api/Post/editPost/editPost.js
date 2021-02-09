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
    editPost: function () {
      var _editPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, caption, location, user, verifyPost;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                id = args.id, caption = args.caption, location = args.location;
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

                return _context.abrupt("return", _prisma["default"].post.update({
                  where: {
                    id: id
                  },
                  data: {
                    caption: caption,
                    location: location
                  }
                }));

              case 11:
                throw Error("Can't do this");

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function editPost(_x, _x2, _x3) {
        return _editPost.apply(this, arguments);
      }

      return editPost;
    }()
  }
};
exports["default"] = _default;