goog.provide('Keyboard.Row');

/**
 * This is my Keyboard Row.
 *
 * @constructor
 */
Keyboard.Row = function() {
  /** @type {Object.<string>} */
  this.attributes = {
    // Default horizontal gap between keys.
    'horizontalGap': '',
    // Default height of a key, in pixels or percentage of display width.
    'keyHeight': '',
    // Default width of a key, in pixels or percentage of display width.
    'keyWidth': '',
    // Mode of the keyboard.
    'keyboardMode': '',
    // Row edge flags.
    'rowEdgeFlags': '',
    // Default vertical gap between rows of keys.
    'verticalGap': ''
  };
  /**
   * Default height of a key in this row.
   * @type {number}
   */
  this.defaultHeight = 0;
  /**
   * Default horizontal gap between keys in this row.
   * @type {number}
   */
  this.defaultHorizontalGap = 0;
  /**
   * Default width of a key in this row.
   * @type {number}
   */
  this.defaultWidth = 0;
  /**
   * The keyboard mode for this row
   * @type {number}
   */
  this.mode = 0;
  /**
   * Edge flags for this row of keys.
   * @type {number}
   */
  this.rowEdgeFlags = 0;
  /**
   * Vertical gap following this row.
   * @type {number}
   */
  this.verticalGap = 0;
};
