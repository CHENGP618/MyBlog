var countries = [
    { value: 'Andorra', data: 'AD' },
    { value: 'Zimbabwe', data: 'ZZ' }
];


$(document).ready(function () {
  $("#search").autocomplete({
    lookup: countries,
    onSelect: function (suggestion) {
        alert('Vous avez chosii: ' + suggestion.value + ', ' + suggestion.data);
    }
  });

});
