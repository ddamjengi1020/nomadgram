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
    uploadPost: function () {
      var _uploadPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, args, _ref) {
        var request, isAuthenticated, user, caption, location, files, newPost;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                user = request.user;
                caption = args.caption, location = args.location, files = args.files;
                _context2.next = 6;
                return _prisma["default"].post.create({
                  data: {
                    caption: caption,
                    location: location,
                    user: {
                      connect: {
                        id: user.id
                      }
                    }
                  }
                });

              case 6:
                newPost = _context2.sent;
                files.forEach( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(file) {
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", _prisma["default"].file.create({
                              data: {
                                url: file,
                                post: {
                                  connect: {
                                    id: newPost.id
                                  }
                                }
                              }
                            }));

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
                return _context2.abrupt("return", newPost);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function uploadPost(_x, _x2, _x3) {
        return _uploadPost.apply(this, arguments);
      }

      return uploadPost;
    }()
  }
};
exports["default"] = _default;