(function($){

  $(document).ready(function(){

    var w = $(window).width();

      if(w < 960) {
        $('.main-nav-mobile').on('click', showMenu);
        $('.menu-close').on('click', showMenu);
        $('.nav-sub-menu1').on('click', showSubMenu1);
        $('.nav-sub-menu2').on('click', showSubMenu2);
        $('.nav-sub-menu3').on('click', showSubMenu3);
      }

    });

  function showMenu() {
    $('.main-nav-menu').slideToggle();
    $('.sub-menu1').slideUp();
    $('.sub-menu2').slideUp();
    $('.sub-menu3').slideUp();
  }

  function showSubMenu1() {
    $('.sub-menu1').slideToggle();
    $('.sub-menu2').slideUp();
    $('.sub-menu3').slideUp();
  }

  function showSubMenu2() {
    $('.sub-menu1').slideUp();
    $('.sub-menu2').slideToggle();
    $('.sub-menu3').slideUp();
  }

  function showSubMenu3() {
    $('.sub-menu1').slideUp();
    $('.sub-menu2').slideUp();
    $('.sub-menu3').slideToggle();
  }

})(jQuery);