goog.provide('Keyboard.Key');


/**
 * Class for describing the position and characteristics of a single key in
 * the keyboard.
 *
 * @constructor
 */
Keyboard.Key = function() {
  /** @type {Object.<string>} */
  this.attributes = {
    // The unicode value or comma-separated values that this key outputs.
    'codes': '',
    // Default horizontal gap between keys.
    'horizontalGap': '',
    // The icon to show in the popup preview.
    'iconPreview': '',
    //  Whether this is a modifier key such as Alt or Shift.
    'isModifier': '',
    //  Whether long-pressing on this key will make it repeat.
    'isRepeatable': '',
    //  Whether this is a toggle key.
    'isSticky': '',
    //  Key edge flags.
    'keyEdgeFlags': '',
    // Default height of a key, in pixels or percentage of display width.
    'keyHeight': '',
    // The icon to display on the key instead of the label.
    'keyIcon': '',
    //  The label to display on the key.
    'keyLabel': '',
    // The string of characters to output when this key is pressed.
    'keyOutputText': '',
    //  Default width of a key, in pixels or percentage of display width.
    'keyWidth': '',
    // The characters to display in the popup keyboard.
    'popupCharacters': '',
    // The XML keyboard layout of any popup keyboard.
    'popupKeyboard': ''
  };

  /**
   * All the key codes (unicode or custom code) that this key could generate,
   * zero'th being the most important.
   * @type {!Array.<number>}
   */
  this.codes = [];
  /**
   * Flags that specify the anchoring to edges of the keyboard for detecting
   * touch events that are just out of the boundary of the key.
   * @type {number}
   */
  this.edgeFlags = 0;
  /**
   * The horizontal gap before this key
   * @type {number}
   */
  this.gap = 0;
  /**
   * Height of the key, not including the gap
   * @type {number}
   */
  this.height = 0;
  /**
   * Icon to display instead of a label.
   * @type {Drawable}
   */
  this.icon = '';
  /**
   * Preview version of the icon, for the preview popup
   * @type {Drawable}
   */
  this.iconPreview = '';
  /**
   * Label to display
   * @type {string}
   */
  this.label = '';
  /**
   * Whether this is a modifier key, such as Shift or Alt
   * @type {boolean}
   */
  this.modifier = '';
  /**
   * If this is a sticky key, is it on?
   * @type {boolean}
   */
  this.on = '';
  /**
   * Popup characters
   * @type {string}
   */
  this.popupCharacters = '';
  /**
   * If this key pops up a mini keyboard, this is the resource id for the XML
   * layout for that keyboard.
   * @type {number}
   */
  this.popupResId = 0;
  /**
   * The current pressed state of this key
   * @type {boolean}
   */
  this.pressed = '';
  /**
   * Whether this key repeats itself when held down
   * @type {boolean}
   */
  this.repeatable = '';
  /**
   * Whether this key is sticky, i.e., a toggle key
   * @type {boolean}
   */
  this.sticky = '';
  /**
   * Text to output when pressed.
   * @type {string}
   */
  this.ext = '';
  /**
   * Width of the key, not including the gap
   * @type {number}
   */
  this.width = 0;
  /**
   * X coordinate of the key in the keyboard layout
   * @type {number}
   */
  this.x = 0;
  /**
   * Y coordinate of the key in the keyboard layout
   * @type {number}
   */
  this.y = 0;

  // (Keyboard.Row parent)
  // Create an empty key with no attributes.
  //
  // (Resources res, Keyboard.Row parent,
  //  int x, int y, XmlResourceParser parser)
  // Create a key with the given top-left coordinate and extract its attributes
  // from the XML parser.
};

/**
 * Returns the drawable state for the key, based on the current state and type
 * of the key.
 * @return {number}
 */
Keyboard.Keys.prototype.getCurrentDrawableState = function() {};

/**
 * Detects if a point falls inside this key.
 *
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
Keyboard.Keys.prototype.isInside = function(x, y) {};

/**
 * Informs the key that it has been pressed, in case it needs to change its
 * appearance or state.
 */
Keyboard.Keys.prototype.onPressed = function() {};

/**
 * Changes the pressed state of the key.
 * @param {boolean} inside
 */
Keyboard.Keys.prototype.onReleased = function(inside) {};

/**
 * Returns the square of the distance between the center of the key and the
 * given point.
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
Keyboard.Keys.prototype.squaredDistanceFrom = function(x, y) {};
