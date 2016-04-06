$(document).ready(function () {
  $("#search").autocomplete({
    lookup: function (query, done) {
      var ajax_query = "/articles/suggestion?query=".concat(query);
        $.ajax( ajax_query , {
          success: function (data) {
            var results = { suggestions: [] };
            $.each(data.suggestions, function (index, element) {
              results.suggestions.push({ value: element.title, data: element.id })
            });
            done(results);
          }
        } );
    },
    onSelect: function(suggestion){
      window.location = "/articles/"+suggestion.data;
    }
  });
});
