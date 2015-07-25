/*!
 * Navbar v1.0.0
 * Slide navbar in and out of screen when you scroll up and down
 * http://mogusbi.co.uk
 *
 * Written by Mo Gusbi
 */
; (function ($, window, document, undefined) {
  'use strict';

  var pluginName = 'navbar',
      defaults = {
        previousScroll: 0
      };

  function Plugin(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      var _this = this,
          contentHeight = $('body').height(),
          windowHeight = $(window).height();

      if (contentHeight < windowHeight) {
        $('html').addClass('no-scroll');
        $(this.element).addClass('has-background');
      }

      $(window).on('scroll', function () {
        _this.scrollEvents();
      });
    },
    scrollEvents: function () {
      var currentScroll = $(window).scrollTop(),
          setBackgroundPoint = $(this.element).height() * 4;

      if (currentScroll > setBackgroundPoint) {
        $(this.element).addClass('has-background');
      } else {
        $(this.element).removeClass('has-background');
      }

      if (currentScroll > this.settings.previousScroll) {
        this.scrollDown();
      } else {
        this.scrollUp();
      }

      this.settings.previousScroll = currentScroll;
    },
    scrollUp: function () {
      $(this.element).removeClass('is-hidden');
    },
    scrollDown: function () {
      if ($(window).scrollTop() > $(this.element).outerHeight()) {
        $(this.element).addClass('is-hidden');
      }
    }
  });

  $.fn[pluginName] = function (options) {
    this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });

    return this;
  };
})(jQuery, window, document);