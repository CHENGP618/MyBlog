$(document).ready(function () {
  $("#search").autocomplete({
    // serviceUrl: "/articles/suggestion",
    lookup: function (query, done) {
      var ajax_query = "/articles/suggestion?query=".concat(query);
        $.ajax( ajax_query , {
          success: function (data) {
           var results = { suggestions: []  };
            $.each(data.suggestions, function (index, element) {
              // suggestions: [{value: "in progress", data: "fds"}]
              results.suggestions.push({value: element.title, data: element.id})
              console.log(element);
            });
            console.log("success !", results);
            done(results);
          }
        } );
        console.log("ajaxa sent");
        // done(results);
    },
    // minChars: 3,
    onSelect: function(suggestion){
      // console.log(arguments.toString())
      window.location = "/articles/"+suggestion.data;
    }
  });
});
