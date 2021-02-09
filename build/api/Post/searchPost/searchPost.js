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
    searchPost: function () {
      var _searchPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
        var term, resultPost;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                term = args.term;
                resultPost = [];

                if (!(term !== "")) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return _prisma["default"].post.findMany({
                  where: {
                    OR: [{
                      location: {
                        contains: term
                      }
                    }, {
                      caption: {
                        contains: term
                      }
                    }]
                  },
                  include: {
                    files: true
                  }
                });

              case 5:
                resultPost = _context.sent;

              case 6:
                return _context.abrupt("return", resultPost);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function searchPost(_x, _x2) {
        return _searchPost.apply(this, arguments);
      }

      return searchPost;
    }()
  }
};
exports["default"] = _default;