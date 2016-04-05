$(document).ready(function () {
  $("#search").autocomplete({
    serviceUrl: "/articles/suggestion",
  });
});
