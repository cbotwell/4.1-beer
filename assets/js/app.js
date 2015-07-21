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

  var grid = document.querySelector('.grid-button');

  grid.onclick = function() {
    beerListingsEl.classList.add('grid');
    beerListingsEl.classList.remove('list');
  };

  var list = document.querySelector('.list-button');

  list.onclick = function() {
    beerListingsEl.classList.add('list');
    beerListingsEl.classList.remove('grid');
  };

  list.onclick();

  var descriptions = document.querySelectorAll('.description');

  for (var i = descriptions.length - 1; i >= 0; i--) {
    descriptions[i].onclick = function() {
      this.classList.toggle('show-full');
    };
  }

  var totalEl = document.querySelector('.total');
  var addToCart = document.querySelectorAll('button');

  for (var x = addToCart.length - 1; x >= 0; x--) {
    addToCart[x].onclick = function() {
      if (totalEl.innerHTML === 'Cart') {
        totalEl.innerHTML = 1;
      } else {
        var currentNum = parseInt(totalEl.innerHTML);
        var newNum = currentNum + 1;
        totalEl.innerHTML = newNum;
      }
    };
  }

})();
