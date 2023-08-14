import $ from "jquery";

$(() => {
  let route = {
    _routes: {}
    , add: function( url, action ) {
      this._routes[url] = action
    }
    , run: function() {
      $.each( this._routes, function( patron ) {
        if ( location.href.match( patron ) ) {
          this();
        }
      });
    }
  }

  route.add( 'index.html', function(){ console.log('Este código, solo funciona en el primer parámetro'); });
  route.add( 'about.html', function(){ console.log('Este código, solo funciona en about.html'); });
  route.add( '.*html', function(){ console.log('Este código, solo funciona en cualquier página html'); });
  
  route.run();
});
