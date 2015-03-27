
$(window).load(function() {

  setTimeout(function(){
    $('body').removeClass("loading").addClass('loaded');
  }, 100);


  // Typing
  $(".type-rule").t('all <span class="rule-resource">instance.tag</span>=<span class="rule-select">web</span> in <span class="rule-resource">subnet.type</span>=<span class="rule-select">public</span>',{
    speed_vary : false
    , speed : 90
    , delay : 0.2
    , blink : 500
  });

  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $("body").addClass("mobile");
  } else {
    skrollr.init();
  }

});

