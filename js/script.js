$(window).load(function() {
    // start up after 2sec no matter what
    alert("dd");
    window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
    }, 2000);
});