"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _graphqlTools = require("graphql-tools");

var _merge = require("@graphql-tools/merge");

var _loadFiles = require("@graphql-tools/load-files");

var allTypes = (0, _loadFiles.loadFilesSync)(_path["default"].join(__dirname, "/api/**/*.graphql"));
var allResolvers = (0, _loadFiles.loadFilesSync)(_path["default"].join(__dirname, "/api/**/*.js"));
var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: (0, _merge.mergeTypeDefs)(allTypes),
  resolvers: (0, _merge.mergeResolvers)(allResolvers)
});
var _default = schema;
exports["default"] = _default;