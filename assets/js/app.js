(function() {
  var beerListingsEl = document.querySelector('beer-listings');

  function registerByQuery(querySelector) {
    var templateString = document.querySelector(querySelector).innerHTML;
    templateString = templateString.replace('&gt;', '>');

    return Handlebars.compile(templateString);
  }

  var handlebarsTemplate = registerByQuery('beer-template');

  var loadBeerData = function(data) {
    var allBeers = '';
    allBeers = handlebarsTemplate(data);
    beerListingsEl = allBeers;
  };

  loadBeerData();
})();
