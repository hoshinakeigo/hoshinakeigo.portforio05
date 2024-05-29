/*!
 * jQuery Detect Displayed - v1
 *
 * Copyright (c) 2021 en-pc service.
 *     https://www.en-pc.jp/
 * Released under the MIT license.
 * see https://opensource.org/licenses/MIT
 */
(function($) {
  $.fn.detectDisplayed = function(options) {

    var elements = this;

    var defaults = {
        callback    : function(){},
        continuous  : false,
        percent     : 100,
        events      : 'load scroll'
    };

    var setting = $.extend(defaults, options);

    $(window).on(setting.events, function() {
      var scrollTop    = $(window).scrollTop();
      var scrollBottom = scrollTop + $(window).height();

      var targetTop    = elements.offset().top;
      var targetBottom = targetTop + elements.height();
      var threshold    = elements.height() * setting.percent / 100;

      if(scrollBottom > targetTop + threshold && scrollTop < targetBottom - threshold) {
        if ( setting.continuous == false ) $(window).off();
        setting.callback();
      }
    });
  }
})(jQuery);
