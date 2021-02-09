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
    sendMessage: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, user, roomId, text, toId, room, getToUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                user = request.user;
                roomId = args.roomId, text = args.text, toId = args.toId;

                if (!(roomId === undefined)) {
                  _context.next = 11;
                  break;
                }

                if (!(user.id !== toId)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return _prisma["default"].room.create({
                  data: {
                    participants: {
                      connect: [{
                        id: user.id
                      }, {
                        id: toId
                      }]
                    }
                  },
                  include: {
                    participants: true
                  }
                });

              case 8:
                room = _context.sent;

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.next = 13;
                return _prisma["default"].room.findOne({
                  where: {
                    id: roomId
                  },
                  include: {
                    participants: true
                  }
                });

              case 13:
                room = _context.sent;

              case 14:
                if (room) {
                  _context.next = 16;
                  break;
                }

                throw Error("Not found corresponding Room");

              case 16:
                getToUser = room.participants.filter(function (participant) {
                  return participant.id !== user.id;
                })[0];
                return _context.abrupt("return", _prisma["default"].message.create({
                  data: {
                    text: text,
                    from: {
                      connect: {
                        id: user.id
                      }
                    },
                    to: {
                      connect: {
                        id: getToUser.id
                      }
                    },
                    room: {
                      connect: {
                        id: room.id
                      }
                    }
                  }
                }));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function sendMessage(_x, _x2, _x3) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }
};
exports["default"] = _default;