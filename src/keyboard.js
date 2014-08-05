goog.provide('Keyboard');
goog.require('Keyboard.Row');

/**
 * Loads an XML description of a keyboard and stores the attributes of the
 * keys. A keyboard consists of rows of keys.
 *
 * @constructor
 */
Keyboard = function() {
  // Different ways to construct:

  // 1) Creates a keyboard from the given xml key layout file.
  // Parameters:
  // xmlLayoutResId  the resource file that contains the keyboard layout and
  //                 keys.
  //
  // 2) Creates a keyboard from the given xml key layout file. Weeds out rows
  // that have a keyboard mode defined but don't match the specified mode.
  // Parameters:
  // xmlLayoutResId  the resource file that contains the keyboard layout and
  //                 keys.
  // modeId  keyboard mode identifier
  // width sets width of keyboard
  // height  sets height of keyboard

  // 3) Creates a keyboard from the given xml key layout file. Weeds out rows
  // that have a keyboard mode defined but don't match the specified mode.
  // Parameters:
  // xmlLayoutResId  the resource file that contains the keyboard layout and
  //                 keys.
  // modeId  keyboard mode identifier

  // 4) Creates a blank keyboard from the given resource file and populates it
  // with the specified characters in left-to-right, top-to-bottom fashion,
  // using the specified number of columns.
  //
  // If the specified number of columns is -1, then the keyboard will fit as
  // many keys as possible in each row.

  // Parameters
  // layoutTemplateResId the layout template file, containing no keys.
  // characters  the list of characters to display on the keyboard. One key will
  //             be created for each character.
  // columns the number of columns of keys to display. If this number is greater
  //         than the number of keys that can fit in a row, it will be ignored.
  //         If this number is -1, the keyboard will fit as many keys as
  //         possible in each row.




};

/** @const {number} */
Keyboard.KEYCODE_ALT = -6;

/** @const {number} */
Keyboard.KEYCODE_CANCEL = -3;

/** @const {number} */
Keyboard.KEYCODE_DELETE = -5;

/** @const {number} */
Keyboard.KEYCODE_DONE = -4;

/** @const {number} */
Keyboard.KEYCODE_MODE_CHANGE = -2;

/** @const {number} */
Keyboard.KEYCODE_SHIFT = -1;

/** @return {!Array.<Keyboard.Key>} */
Keyboard.prototype.getKeys = function() {};

/** @return {!Array.<Keyboard.Key>} */
Keyboard.prototype.getModifierKeys = function() {};

/**
 * Returns the indices of the keys that are closest to the given point.
 *
 * @param {number} x the x-coordinate of the point.
 * @param {number} y the y-coordinate of the point.
 * @return {!Array.<number>} The array of integer indices for the nearest keys
 * to the given point. If the given point is out of range, then an array of
 * size zero is returned.
 */
Keyboard.prototype.getNearestKeys = function(x, y) {};

/** @return {number} */
Keyboard.prototype.getShiftKeyIndex = function() {};

/** @return {boolean} */
Keyboard.prototype.isShifted = function() {};

/** @param {boolean} shiftState */
Keyboard.prototype.setShifted = function(shiftState) {};


/** Protected */

/**
 * @param {Resources} res
 * @param {Keyboard.Row} parent
 * @param {number} x
 * @param {number} y
 * @param {XmlResourceParser} parser
 * @protected
 * @return {Keyboard.Key}
 */
Keyboard.prototype.createKeyFromXml = function(res, parent, x, y, parser) {};

/**
 * @param {Resource} res
 * @param {XmlResourceParser} parser
 * @return {Keyboard.Row}
 * @protected
 */
Keyboard.prototype.createRowFromXml = function(res, parser) {};
