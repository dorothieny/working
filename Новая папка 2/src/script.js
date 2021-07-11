"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

require("core-js/modules/es.array.concat.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider = /*#__PURE__*/function () {
  function Slider(width, height) {
    _classCallCheck(this, Slider);

    this.width = width;
    this.height = height;
  }

  _createClass(Slider, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("I have width ".concat(this.width, " and heigth ").concat(this.height));
    }
  }]);

  return Slider;
}();

exports.Slider = Slider;