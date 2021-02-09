"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prisma = _interopRequireDefault(require("../../../prisma"));

var _default = {
  Query: {
    seeFullPost: function () {
      var _seeFullPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
        var id, _yield$prisma$post$fi, user, comments, files, post;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = args.id;
                _context.next = 3;
                return _prisma["default"].post.findOne({
                  where: {
                    id: id
                  },
                  include: {
                    user: true,
                    comments: {
                      include: {
                        user: true
                      }
                    },
                    likes: {
                      include: {
                        user: true
                      }
                    },
                    files: true
                  }
                });

              case 3:
                _yield$prisma$post$fi = _context.sent;
                user = _yield$prisma$post$fi.user;
                comments = _yield$prisma$post$fi.comments;
                files = _yield$prisma$post$fi.files;
                post = (0, _objectWithoutProperties2["default"])(_yield$prisma$post$fi, ["user", "comments", "files"]);
                return _context.abrupt("return", {
                  post: post,
                  comments: comments,
                  files: files,
                  user: user
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function seeFullPost(_x, _x2) {
        return _seeFullPost.apply(this, arguments);
      }

      return seeFullPost;
    }()
  }
};
exports["default"] = _default;