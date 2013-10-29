/**
 * An Ember.js component for displaying a spinning loading indicator using spin.js.
 * 
 * Implementation is Eric Berry's (@cavneb), and I've just created the bower module.
 * 
 * BE AWARE that you'll need to define an empty `components/ic-spinner` template 
 * or this won't work. See [this issue](https://github.com/emberjs/ember.js/issues/3231)
 * if you (like me) think this is unfortunate.
 * @see http://fgnass.github.io/spin.js/ for usage info
 */
App.IcSpinnerComponent = Ember.Component.extend({
  
  lines    : 12, // The number of lines to draw
  length   : 6, // The length of each line
  width    : 2, // The line thickness
  radius   : 4, // The radius of the inner circle
  corners  : 1, // Corner roundness (0..1)
  rotate   : 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color    : '#000', // #rgb or #rrggbb or array of colors
  speed    : 1, // Rounds per second
  trail    : 60, // Afterglow percentage
  shadow   : false, // Whether to render a shadow
  hwaccel  : false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex   : 2e9, // The z-index (defaults to 2000000000)
  top      : 'auto', // Top position relative to parent in px
  left     : 'auto', // Left position relative to parent in px
  template : Em.Handlebars.compile('{{foo}}'),

  showSpinner: function() {
    var target = this.get('element');
    this.spinner = new Spinner({
        lines    : this.get('lines'),
        length   : this.get('length'),
        width    : this.get('width'),
        radius   : this.get('radius'),
        corners  : this.get('corners'),
        rotate   : this.get('rotate'),
        direction: this.get('direction'),
        color    : this.get('color'),
        speed    : this.get('speed'),
        trail    : this.get('trail'),
        shadow   : this.get('shadow'),
        hwaccel  : this.get('hwaccel'),
        className: this.get('className'),
        zIndex   : this.get('zIndex'),
        top      : this.get('top'),
        left     : this.get('left')
    });
    this.spinner.spin(target);
  }.on('didInsertElement'),
  
  teardown: function() {
    this.spinner.stop();
  }.on('willDestroyElement')
    
});
