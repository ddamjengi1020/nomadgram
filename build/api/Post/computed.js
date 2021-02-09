"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prisma = _interopRequireDefault(require("../../prisma"));

var _default = {
  Post: {
    isLiked: function isLiked(parent, _, _ref) {
      var request = _ref.request;
      var user = request.user;
      var parentId = parent.id;
      return _prisma["default"].like.count({
        where: {
          postId: parentId,
          userId: user.id
        }
      });
    },
    likeCount: function likeCount(parent) {
      var parentId = parent.id;
      return _prisma["default"].like.count({
        where: {
          postId: parentId
        }
      });
    },
    commentCount: function commentCount(parent) {
      var parentId = parent.id;
      return _prisma["default"].comment.count({
        where: {
          postId: parentId
        }
      });
    }
  }
};
exports["default"] = _default;