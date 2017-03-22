$(document).ready(function() {
  function checkOffset() {
      $("#mainNavigation").toggleClass("top-nav-collapse", $(this).scrollTop() > 100);
  }

  function checkNavCollapse() {
    var navigation = $('.top-nav-collapse');
    if(navigation.length > 0) {
      navigation.find('a.topHeaderAnchor').empty();

      navigation.find('a.topHeaderAnchor#homeHeaderAnchor').html('<i class="fa fa-home" aria-hidden="true"></i>');
      navigation.find('a.topHeaderAnchor#forumHeaderAnchor').html('<i class="fa fa-users" aria-hidden="true"></i>');
      navigation.find('a.topHeaderAnchor#facultiesHeaderAnchor').html('<i class="fa fa-book" aria-hidden="true"></i>');
      navigation.find('a.topHeaderAnchor#studyingHeaderAnchor').html('<i class="fa fa-graduation-cap" aria-hidden="true"></i>');
      navigation.find('a.topHeaderAnchor#organizationHeaderAnchor').html('<i class="fa fa-sitemap" aria-hidden="true"></i>');
    } else {
      navigation = $('#mainNavigation');
      navigation.find('a.topHeaderAnchor').empty();
      navigation.find('a.topHeaderAnchor#homeHeaderAnchor').html('Home');
      navigation.find('a.topHeaderAnchor#forumHeaderAnchor').html('Forum');
      navigation.find('a.topHeaderAnchor#facultiesHeaderAnchor').html('Faculties');
      navigation.find('a.topHeaderAnchor#studyingHeaderAnchor').html('Studying');
      navigation.find('a.topHeaderAnchor#organizationHeaderAnchor').html('Organization');
    }
  }

  if($(window).width() > 768) {
    checkOffset();
    checkNavCollapse();
  }

  $(window).scroll(function() {
      if($(window).width() > 768) {
        checkOffset();
        checkNavCollapse();
      }
  });
});
