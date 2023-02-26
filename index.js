//foto random
window.onload = Fotorng;
var fotos = new Array("images/leon.jpg","images/mariquita.jpg","images/tortuga.jpg","images/mariquita.jpg","images/serpiente.jpg"
,"images/dragon.jpg","images/halcon.jpg");

function Fotorng() {
     var número = Math.floor(Math.random() * fotos.length);
     document.getElementById("fotorandom").src = fotos[número];
}

 const inputHover = document.getElementById("input-hover");
 //Enseño las categorias
 const hiddenFrame = document.getElementById("hidden-frame");
 inputHover.addEventListener("mouseover", () => {
    hiddenFrame.style.display = "block";
  });
//oculto al quitar el mouse
  hiddenFrame.addEventListener("mouseout", () => {
    hiddenFrame.style.display = "none";
  });

  //Código para formulario
  const nombre = document.getElementById("nombre")
  const mail = document.getElementById("mail")
  const mensaje = document.getElementById("mensaje")
  const subirarchivo = document.getElementById("checkboxarchivo")  
  const enviado = document.getElementById("enviado")
  let contacto = {
    nombre: nombre.value, mail: mail.value, mensaje: mensaje.value

}
