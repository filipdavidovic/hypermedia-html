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

  function checkNavCollapse() {
    var navigation = $('.top-nav-collapse');
    if(navigation.length > 0) {
      $('.nav.navbar-nav').removeClass("pull-right");
      $('.navbar-brand').hide(400, function() {
        $(this).remove();
        $('#navbarBrand').css('display', 'none');
      });

      navigation.find('a.topHeaderAnchor').empty();

      navigation.find('a.topHeaderAnchor#homeHeaderAnchor').html('<i class="fa fa-home" aria-hidden="true"></i>');
      navigation.find('a.topHeaderAnchor#forumHeaderAnchor').html('<i class="fa fa-users" aria-hidden="true"></i>');
      navigation.find('a.topHeaderAnchor#facultiesHeaderAnchor').html('<i class="fa fa-book" aria-hidden="true"></i>');
      navigation.find('a.topHeaderAnchor#studyingHeaderAnchor').html('<i class="fa fa-graduation-cap" aria-hidden="true"></i>');
      navigation.find('a.topHeaderAnchor#organizationHeaderAnchor').html('<i class="fa fa-sitemap" aria-hidden="true"></i>');
    } else {
      $('.nav.navbar-nav').addClass("pull-right");
      $('#navbarBrand').html('<a class="navbar-brand" href="#"><img src="./static/images/tue.png" style="height: 70px; width: auto;"/></a>').show(400);

      navigation = $('#mainNavigation');
      navigation.find('a.topHeaderAnchor').empty();
      navigation.find('a.topHeaderAnchor#homeHeaderAnchor').html('Home');
      navigation.find('a.topHeaderAnchor#forumHeaderAnchor').html('Forum');
      navigation.find('a.topHeaderAnchor#facultiesHeaderAnchor').html('Faculties');
      navigation.find('a.topHeaderAnchor#studyingHeaderAnchor').html('Studying');
      navigation.find('a.topHeaderAnchor#organizationHeaderAnchor').html('Organization');
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

  if($(window).width() > 768) {
    checkOffset();
    checkNavCollapse();
    checkTooltip();
  }

  $(window).scroll(function() {
      if($(window).width() > 768) {
        checkOffset();
        checkNavCollapse();
        checkTooltip();
      }
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
