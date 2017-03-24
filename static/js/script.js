$(document).ready(function() {
  // add header and footer
  // $.get('./header.html', function (data) {
  //     $("body").prepend(data);
  // });
  //
  // $.get('./footer.html', function (data) {
  //     $("body").append(data);
  // });

  function checkOffset() {
      $("#mainNavigation").toggleClass("top-nav-collapse", $(this).scrollTop() > 100);
  }

  function changeToCollapsed() {
    $('.nav.navbar-nav').removeClass("pull-right");


    var navigation = $('.top-nav-collapse');
    // mali 30px
    navigation.find('a.topHeaderAnchor').empty();

    navigation.find('a.topHeaderAnchor#homeHeaderAnchor').html('<i class="fa fa-home" aria-hidden="true"></i>');
    navigation.find('a.topHeaderAnchor#forumHeaderAnchor').html('<i class="fa fa-users" aria-hidden="true"></i>');
    navigation.find('a.topHeaderAnchor#facultiesHeaderAnchor').html('<i class="fa fa-book" aria-hidden="true"></i>');
    navigation.find('a.topHeaderAnchor#studyingHeaderAnchor').html('<i class="fa fa-graduation-cap" aria-hidden="true"></i>');
    navigation.find('a.topHeaderAnchor#organizationHeaderAnchor').html('<i class="fa fa-sitemap" aria-hidden="true"></i>');

    console.log("collapsed");
  }

  function changeToExpanded() {
    $('.nav.navbar-nav').addClass("pull-right");

    var navigation = $('#mainNavigation');

    navigation.find('a.topHeaderAnchor').empty();

    navigation.find('a.topHeaderAnchor#homeHeaderAnchor').html('Home');
    navigation.find('a.topHeaderAnchor#forumHeaderAnchor').html('Forum');
    navigation.find('a.topHeaderAnchor#facultiesHeaderAnchor').html('Faculties');
    navigation.find('a.topHeaderAnchor#studyingHeaderAnchor').html('Studying');
    navigation.find('a.topHeaderAnchor#organizationHeaderAnchor').html('Organization');

    console.log("expanded");
  }

  function checkNavCollapse() {
    var navigation = $('.top-nav-collapse');
    if(navigation.length > 0) {
      changeToCollapsed();
      $('#navbarBrand').hide(400);
      $('.nav.navbar-nav').removeClass("pull-right");
    } else {
      changeToExpanded();
      $('#navbarBrand').show(400);
      $('.nav.navbar-nav').addClass("pull-right");
    }
  }

  function checkTooltip() {
    // console.log($(window).scrollTop());
    if($(window).scrollTop() > 100) {
      $('[data-toggle="tooltip"]').tooltip("enable");
    } else {
      $('[data-toggle="tooltip"]').tooltip("disable");
    }
  }

  function resizeBanner(screenSize) {
    if(screenSize === "extra-small"){
      $('#bannerImage').css("height", "30px");
      $('#bannerImage').attr("src", "./static/images/tue-small.png");
    } else if(screenSize == "small") {
      $('#bannerImage').css("height", "70px");
      $('#bannerImage').attr("src", "./static/images/tue-small.png");
    } else if(screenSize == "medium") {
      $('#bannerImage').css("height", "70px");
      $('#bannerImage').attr("src", "./static/images/tue-small.png");
    } else {
      $('#bannerImage').css("height", "70px");
      // $('#bannerImage').css("width", "auto");
      $('#bannerImage').attr("src", "./static/images/tue.png");
    }
  }

  function fixHeader() {
    if($(window).width() > 1321) { // (1321, inifinity)
      checkOffset();
      checkNavCollapse();
      checkTooltip();
      $('.navbar .navbar-nav > li').css("padding", "0 50px");
      resizeBanner("large");
    } else if($(window).width() > 964) { // (964, 1321]
      changeToCollapsed();
      // $('#navbarBrand').hide(400);
      $('.nav.navbar-nav').addClass("pull-right");
      $('.navbar .navbar-nav > li').css("padding", "0 10px");
      resizeBanner("medium");
    } else if($(window).width() > 768) { // (768, 964]
      resizeBanner("small");
      $('.navbar .navbar-nav > li').css("padding", "0 10px");
      $('.nav.navbar-nav').addClass("pull-right");
    } else { // [0, 768]
      $('.nav.navbar-nav').removeClass("pull-right");
      $('.navbar .navbar-nav > li').css("padding", null);
      resizeBanner("extra-small");
      $('.navbar .navbar-nav > li').css("padding", null);
    }
  }

  fixHeader();

  $(window).resize(function() {
    fixHeader();
  });

  $(window).scroll(function() {
      fixHeader();
  });
});

// $('[data-toggle="tooltip"]').tooltip();

var acc = $('.accordion.accordion-dropdown');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    $(this).toggleClass("active");
    var panel = this.nextElementSibling; // TODO: implement jquery
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}

$('ul.nav li.dropdown').hover(function() {
              $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
            }, function() {
              $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
            });
