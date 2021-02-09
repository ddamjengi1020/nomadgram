"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.sendSecretMail = exports.generateSecret = void 0;

var _words = require("./words");

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var generateSecret = function generateSecret() {
  var randomNumber = Math.floor(Math.random() * _words.adjectives.length);
  return "".concat(_words.adjectives[randomNumber], " ").concat(_words.nouns[randomNumber]);
};

exports.generateSecret = generateSecret;

_mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

var sendSecretMail = function sendSecretMail(adress, secret) {
  var msg = {
    from: "silluat11@gmail.com",
    to: adress,
    subject: "Login Secret for Nomadgram",
    html: "Hello! Your login secret it ".concat(secret, ". <br/>Copy paste on the app/website to login")
  };
  return _mail["default"].send(msg).then(function () {
    return console.log("Email sent");
  })["catch"](function (error) {
    return console.log(error);
  });
};

exports.sendSecretMail = sendSecretMail;

var generateToken = function generateToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, process.env.JWT_SECRET);
};

exports.generateToken = generateToken;