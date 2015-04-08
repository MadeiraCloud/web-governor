
$(window).load(function() {

  setTimeout(function(){
    $('body').removeClass("loading").addClass('loaded');
  }, 100);

  // Typing
  $(".type-rule").t('alert if <span class="rule-resource">instance.tag.role</span>=<span class="rule-select">db</span> and <span class="rule-resource">instance.subnet.type</span>=<span class="rule-select">public</span>',{
    speed_vary : false
    , speed : 90
    , delay : 0.2
    , blink : 500
  });

  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $("body").addClass("mobile");
  } else {
    skrollr.init({forceHeight:false});
  }

});

