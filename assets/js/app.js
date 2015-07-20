(function() {

  function registerByQuery(query) {
    var el = document.querySelector(query);
    return Handlebars.compile(el.innerHTML);
  }

  var template = registerByQuery('#beer-template');
  var beerListingsEl = document.querySelector('.beer-listings');

  var allBeers = '';

  beerData.data.forEach(function(data) {
    allBeers += template(data);
  });

  beerListingsEl.innerHTML = allBeers;
})();
