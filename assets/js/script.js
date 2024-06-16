//codigo  0riginal

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);


//Se modifica segun lo solicitado:
//Requerimiento 3.2

// const ele = document.getElementById("ele1");
//     ele.addEventListener("click", function(event) {
//         event.target.style.backgroundColor = 'yellow';
//     });

    //Requerimiento 3.3 codigo final

    const ele = document.getElementById("ele1");
function pintar(ele, color) {
    ele.style.backgroundColor = color;
  }
  pintar(ele,"green");
ele.addEventListener("click", function (event) {
  pintar(event.target, "yellow");
});
