"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./env");

var _morgan = _interopRequireDefault(require("morgan"));

var _schema = _interopRequireDefault(require("./schema"));

var _graphqlYoga = require("graphql-yoga");

var _passport = require("./passport");

require("./utils");

var _middlewares = require("./middlewares");

var _upload = require("./upload");

var PORT = process.env.PORT;
var server = new _graphqlYoga.GraphQLServer({
  schema: _schema["default"],
  context: function context(_ref) {
    var request = _ref.request;
    return {
      request: request,
      isAuthenticated: _middlewares.isAuthenticated
    };
  }
});
server.express.use((0, _morgan["default"])("dev"));
server.express.use(_passport.authenticateJwt);
server.express.post("/api/upload", _upload.uploadMiddleware, _upload.uploadController);
server.start({
  port: PORT
}, function () {
  return console.log("\uD83D\uDE0E server is running on http://localhost:".concat(PORT));
});