import $ from "jquery";

// //! ==========================
// //! OPTIMIZACIÓN DE RECUROS
// //! ==========================

// //* =================================== 01 ===================================
// //* Es preferible utilizar una función que se reutilice en los callback
// //* Ejemplo
$('#element1').on('click', function () {
  //Hacer algo
});

$('#element2').on('click', function () {
  //Hacer lo mismo
});


// //? Mejor ejemplo
const hacer = () => {
  //Hacer  algo de mejor manera
}
$('#element1', '#element2', hacer);



// //* =================================== 02 ===================================
// //* Es preferible utilizar bucles nativos de JS a bucles de jQuery

let liArray = $('li');

// //* Consumo de n segundos
for (let index = 0; index < 1000000; index++) {
  liArray.each( function(index, item) {
    this;
  });
}

// //? Consumo de hasta n/3 segundos
for (let index = 0; index < 1000000; index++) {
  for (let index2 = 0; index2 < liArray.length; index2++) {
    liArray[index];
  }
}



// //* =================================== 03 ===================================
// //* Es preferible desenlazar elementos para su manipulación y luego reincorporarlos


let element = $('#element');
// //* Consumo de n segundos
for (let index = 0; index < 1000000; index++) {
  liArray.each( function(index, item) {
    element.width( Math.round( Math.random() * 100 ) );
    element.height( Math.round( Math.random() * 100 ) );
  });
}

// //? Consumo de hasta n/4 segundos
let parent = element.parent();
for (let index = 0; index < 1000000; index++) {
  element.width( Math.round( Math.random() * 100 ) );
  element.height( Math.round( Math.random() * 100 ) );
}

element.appendTo( parent );


document.querySelector('#app').innerHTML = `<h4>add main.js</h4>`