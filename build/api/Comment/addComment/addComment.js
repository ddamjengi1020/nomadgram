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
    addComment: function () {
      var _addComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, postId, text, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                postId = args.postId, text = args.text;
                user = request.user;
                _context.prev = 4;
                _context.next = 7;
                return _prisma["default"].comment.create({
                  data: {
                    user: {
                      connect: {
                        id: user.id
                      }
                    },
                    post: {
                      connect: {
                        id: postId
                      }
                    },
                    text: text
                  }
                });

              case 7:
                return _context.abrupt("return", true);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](4);
                return _context.abrupt("return", false);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 10]]);
      }));

      function addComment(_x, _x2, _x3) {
        return _addComment.apply(this, arguments);
      }

      return addComment;
    }()
  }
};
exports["default"] = _default;