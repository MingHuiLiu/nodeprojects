define('components/jquery-ui/effect-highlight', ['require', 'exports', 'module', 'components/jquery/jquery', 'components/jquery-ui/effect'], function(require, exports, module) {

  /*!
   * jQuery UI Effects Highlight 1.11.2
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/highlight-effect/
   */
  
  (function (factory) {
      // AMD. Register as an anonymous module.
      
      module.exports = factory(require('components/jquery/jquery'), require('components/jquery-ui/effect'));;
  }(function ($) {
      return $.effects.effect.highlight = function (o, done) {
          var elem = $(this), props = [
                  'backgroundImage',
                  'backgroundColor',
                  'opacity'
              ], mode = $.effects.setMode(elem, o.mode || 'show'), animation = { backgroundColor: elem.css('backgroundColor') };
          if (mode === 'hide') {
              animation.opacity = 0;
          }
          $.effects.save(elem, props);
          elem.show().css({
              backgroundImage: 'none',
              backgroundColor: o.color || '#ffff99'
          }).animate(animation, {
              queue: false,
              duration: o.duration,
              easing: o.easing,
              complete: function () {
                  if (mode === 'hide') {
                      elem.hide();
                  }
                  $.effects.restore(elem, props);
                  done();
              }
          });
      };
  }));

});