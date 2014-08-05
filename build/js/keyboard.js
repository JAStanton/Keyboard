Keyboard.Key = function $Keyboard$Key$() {
  this.attributes = {codes:"", horizontalGap:"", iconPreview:"", isModifier:"", isRepeatable:"", isSticky:"", keyEdgeFlags:"", keyHeight:"", keyIcon:"", keyLabel:"", keyOutputText:"", keyWidth:"", popupCharacters:"", popupKeyboard:""};
  this.codes = [];
  this.height = this.gap = this.edgeFlags = 0;
  this.opupCharacters = this.on = this.modifier = this.abel = this.conPreview = this.con = "";
  this.popupResId = 0;
  this.ext = this.sticky = this.repeatable = this.pressed = "";
  this.y = this.x = this.width = 0;
};
Keyboard.Keys.prototype.getCurrentDrawableState = function $Keyboard$Keys$$getCurrentDrawableState$() {
};
Keyboard.Keys.prototype.isInside = function $Keyboard$Keys$$isInside$($x$$, $y$$) {
};
Keyboard.Keys.prototype.onPressed = function $Keyboard$Keys$$onPressed$() {
};
Keyboard.Keys.prototype.onReleased = function $Keyboard$Keys$$onReleased$($inside$$) {
};
Keyboard.Keys.prototype.squaredDistanceFrom = function $Keyboard$Keys$$squaredDistanceFrom$($x$$, $y$$) {
};
Keyboard.Row = function $Keyboard$Row$() {
  this.attributes = {horizontalGap:"", keyHeight:"", keyWidth:"", keyboardMode:"", rowEdgeFlags:"", verticalGap:""};
  this.verticalGap = this.rowEdgeFlags = this.mode = this.defaultWidth = this.defaultHorizontalGap = this.defaultHeight = 0;
};
var Keyboard = function $Keyboard$() {
  this.verticalGap = this.keyWidth = this.keyHeight = this.horizontalGap = "";
};
Keyboard.KEYCODE_ALT = -6;
Keyboard.KEYCODE_CANCEL = -3;
Keyboard.KEYCODE_DELETE = -5;
Keyboard.KEYCODE_DONE = -4;
Keyboard.KEYCODE_MODE_CHANGE = -2;
Keyboard.KEYCODE_SHIFT = -1;
Keyboard.prototype.getHeight = function $Keyboard$$getHeight$() {
};
Keyboard.prototype.getKeys = function $Keyboard$$getKeys$() {
};
Keyboard.prototype.getMinWidth = function $Keyboard$$getMinWidth$() {
};
Keyboard.prototype.getKeys = function $Keyboard$$getKeys$() {
};
Keyboard.prototype.getModifierKeys = function $Keyboard$$getModifierKeys$() {
};
Keyboard.prototype.getNearestKeys = function $Keyboard$$getNearestKeys$($x$$, $y$$) {
};
Keyboard.prototype.getShiftKeyIndex = function $Keyboard$$getShiftKeyIndex$() {
};
Keyboard.prototype.isShifted = function $Keyboard$$isShifted$() {
};
Keyboard.prototype.setShifted = function $Keyboard$$setShifted$($shiftState$$) {
};
Keyboard.prototype.createKeyFromXml = function $Keyboard$$createKeyFromXml$($res$$, $parent$$, $x$$, $y$$, $parser$$) {
};
Keyboard.prototype.createRowFromXml = function $Keyboard$$createRowFromXml$($res$$, $parser$$) {
};
Keyboard.prototype.getHorizontalGap = function $Keyboard$$getHorizontalGap$() {
};
Keyboard.prototype.getKeyHeight = function $Keyboard$$getKeyHeight$() {
};
Keyboard.prototype.getKeyWidth = function $Keyboard$$getKeyWidth$() {
};
Keyboard.prototype.getVerticalGap = function $Keyboard$$getVerticalGap$() {
};
Keyboard.prototype.setHorizontalGap = function $Keyboard$$setHorizontalGap$($gap$$) {
};
Keyboard.prototype.setKeyHeight = function $Keyboard$$setKeyHeight$($height$$) {
};
Keyboard.prototype.setKeyWidth = function $Keyboard$$setKeyWidth$($width$$) {
};
Keyboard.prototype.setVerticalGap = function $Keyboard$$setVerticalGap$($gap$$) {
};

