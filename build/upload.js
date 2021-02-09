"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadController = exports.uploadMiddleware = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _multerCloudStorage = _interopRequireDefault(require("multer-cloud-storage"));

var upload = (0, _multer["default"])({
  storage: new _multerCloudStorage["default"]({
    bucket: "nomadgram-storage",
    projectId: "nomadgram-303811",
    acl: "publicRead",
    keyFilename: _path["default"].join(__dirname, "./nomadgram-303811-46849aca6779.json"),
    filename: function filename(_, file, cb) {
      return cb(null, "".concat(Date.now(), "-").concat(file.originalname));
    }
  })
});
var uploadMiddleware = upload.array("files");
exports.uploadMiddleware = uploadMiddleware;

var uploadController = function uploadController(req, res) {
  var files = req.files; // files is Array contained Object that will using filename

  res.json({
    files: files
  });
};

exports.uploadController = uploadController;