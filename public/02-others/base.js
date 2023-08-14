import $ from "jquery";

$(() => {
  // //! CONTAR
  // //! Básico
  // if ( $('#idEjemplo').length ) {
  //   console.log( 'Existe' );
  // }
  // //? Simplificado
  $('#idEjemplo').length && console.log( 'Existe esto' ); //Mas rápido

  // //! MULTI SELECTOR
  $('h1, ul').attr('data-custom-new-attribute', 'nuevo'); //Se ve el resultado en el código HTML generado

  // //! VALIDAR
  let $customElement = $('.customClass');
  $customElement.is('div') && console.log( 'Es un div' );
  $customElement.is('.customClass') && console.log( 'Tiene la clase << customClass >>' );
  $customElement.is(':not(:visible)') && console.log( 'Está invisible' );
  $customElement.is(':visible') && console.log( 'Está visible' );

  //Cuando un elemento es animado deja el atributo << animated >>
  $customElement.animate({ 'width': 200 }, 100);
  $customElement.is(':animated') && console.log( 'Fue animado' );

  
  // //! CANTIDAD
  let quantity = $('div').length;

  console.log( quantity );
  console.log( $('*').length );

  
  // //! AGREGAR FUNCIONES EN jQuery
  $.fn.nombreFuncion = function () { console.log(this); }
  $('div').nombreFuncion();
  
  $.fn.existe = function () { return this.length > 0; }

  console.log( $('div').existe() ? 'Si': 'No' );


  // //! FILTRO EN jQuery
  $('li', '#ulPrimero').each( function() {
    console.log( $(this).html() );
  });

  
  // //! AGREGANDO INFO EN TIEMPO DE EJECUCIÓN
  let divProps = {
    class: 'azul-grande'
    , css: {
      'background-color': 'blue'
    }
    , width: 30
    , height: 30
    , animate: {
      width: 250
      , height: 50
    }
  };

  let div = $('<div>', divProps);

  div.appendTo( 'body' );


  // //! MENÚ CONTEXTUAL
  $(document).on('contextmenu', function( custom ) {
    // elimiar el evento
    custom.preventDefault();
    console.log( 'Se abrió el menú contextual' );

  });

  // //! URLS
  let url = 'https://www.google.com/search?q=jquery+dom&sxsrf=AB5stBi4xPY3REyOG9LT71Le5glsl8GNMg%3A1691442805585&source=hp&ei=dV7RZOi1IZq45OUPs9Kd6Ag&iflsig=AD69kcEAAAAAZNFshaDOeBwUSXfq8NYvf1PRJ8Rjt2_O&ved=0ahUKEwioxNS8u8uAAxUaHLkGHTNpB40Q4dUDCAk&uact=5&oq=jquery+dom&gs_lp=Egdnd3Mtd2l6IgpqcXVlcnkgZG9tMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSOwZUKUQWO4YcAN4AJABAJgBVqABtAaqAQIxMLgBA8gBAPgBAagCCsICBxAjGOoCGCfCAgcQIxiKBRgnwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICCBAAGIAEGLEDwgILEC4YgAQYsQMYgwHCAgUQLhiABA&sclient=gws-wiz#nuevo';

  let $a = $('<a>', { href: url });

  let aProps = {
    hostName: $a.prop( 'hostname' )
    , path: $a.prop( 'pathname' )
    , query: $a.prop( 'search' )
    , protocol: $a.prop( 'protocol' )
    , hash: $a.prop( 'hash' )
    , querys: $a.prop( 'search' ).split('&')
  }

  console.log( aProps );

});
