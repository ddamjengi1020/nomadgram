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
    seeRoom: function () {
      var _seeRoom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, user, verifiedParticipant;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                id = args.id;
                user = request.user;
                _context.next = 6;
                return _prisma["default"].room.count({
                  where: {
                    id: id,
                    participants: {
                      some: {
                        id: user.id
                      }
                    }
                  }
                });

              case 6:
                verifiedParticipant = _context.sent;

                if (!verifiedParticipant) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", _prisma["default"].room.findOne({
                  where: {
                    id: id
                  },
                  include: {
                    participants: true,
                    messages: {
                      include: {
                        from: true,
                        to: true
                      }
                    }
                  }
                }));

              case 11:
                throw Error("You Can't see the Room!");

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function seeRoom(_x, _x2, _x3) {
        return _seeRoom.apply(this, arguments);
      }

      return seeRoom;
    }()
  }
};
exports["default"] = _default;