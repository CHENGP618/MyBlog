$(document).ready(function () {
  $("#search").autocomplete({
    serviceUrl: "/articles/suggestion",
    onSelect: function (suggestion) {
        console.log('Vous avez choisi: ' + suggestion.value + ', ' + suggestion.data);
    }
  });

});
