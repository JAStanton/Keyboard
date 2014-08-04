goog.provide('Keyboard');
goog.require('Keyboard.Row');
goog.require('goog.dom')

/**
 * Main Keyboard Class.
 *
 * @constructor
 */
Keyboard = function() {

};

/**
 * [methodName description]
 */
Keyboard.prototype.createRow = function(first_argument) {
  var div = goog.dom.createDom('div');
  console.log(div);
};


var a = new Keyboard();
a.createRow();
