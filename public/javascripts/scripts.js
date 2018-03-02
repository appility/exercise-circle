(function($) {
  'use strict';
  var handler = function(event) {
    event.preventDefault();
    event.currentTarget.form.submit();
  };

  var attachBehaviour = function () {
    var buttons = document.querySelectorAll('.article-nav .button');
    for ( var i = 0; i < buttons.length; i++ ) {
      buttons[i].addEventListener('click', handler);
    }
  };

  hideAll = function () {

  };

  showSome = function () {

  };

  var init = function () {
    attachBehaviour();
  };

  init();

})();
