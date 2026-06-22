//Capturamos los elementos usando el DOM

const mensajeError = document.getElementById("mensajeError");
const btnAgregar = document.getElementById("btnAgregar");
const inputActividad = document.getElementById("actividadInput");
const listaActividades = document.getElementById("listaActividades");
const mensajeVacio =document.getElementById("mensajeVacio");
document.getElementById("year").textContent =new Date().getFullYear();
const totalActividades =document.getElementById("totalActividades");
const totalActividadesRealizadas =document.getElementById("totalActividadesRealizadas");
const totalActividadesPendientes =document.getElementById("totalActividadesPendientes");

// Evento Para Agregar Actividad Al Hacer Click En El Boton 
btnAgregar.addEventListener("click", agregarActividad);

inputActividad.addEventListener("keypress", function(evento){
    if(event.key ===""){
        agregarActividad();
    }
});



// Funcion principal para agregar una actividad 
function agregarActividad() {
    const textoActividad = inputActividad.value.trim();

    // Validacion de campo vacio
    if( textoActividad === "") {
        mensajeError.textContent = "por favor,escribe una actividad antes de agregarla";
        return;
    }


    // Limpiar el mensaje de error

    mensajeError.textContent = "";

    //Creamos el elemento li

    const nuevaActividad = document.createElement("li");

    // Creamos un span para el texto de la actividad
    const texto = document.createElement("span");
    texto.textContent = textoActividad;

    //Creamos el contenedor de los botones

    const contenedorBotones = document.createElement("div");
    contenedorBotones.classList.add("botones");

    // Botón para marcar como realizada
    const btnRealizada = document.createElement("button");
    btnRealizada.textContent = "Realizada";
    btnRealizada.classList.add("btn-realizada");

    // Botón para marcar como eliminada

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");
    

    // Evento para marcar o desenmarcar como realizado

    btnRealizada.addEventListener("click", function () {
        nuevaActividad.classList.toggle("realizada");

        if(nuevaActividad.classList.contains("realizada")) {
            btnRealizada.textContent = "Pendiente";
        } else {
            btnRealizada.textContent = "Realizada";
        }
    });

    btnEliminar.addEventListener("click", function(){
        listaActividades.removeChild(nuevaActividad);
    actualizarContadores();
    });

    //Agregamos los botones al contador 
    contenedorBotones.appendChild(btnRealizada);
    contenedorBotones.appendChild(btnEliminar);
    
    //Agregamos el texto a los botones al li

    nuevaActividad.appendChild(texto);
    nuevaActividad.appendChild(contenedorBotones);

    listaActividades.appendChild(nuevaActividad);

    actualizarContadores();

}

//Función para actualizar total, realizadas y pendientes
function actualizarContadores() {
    const actividades = listaActividades.querySelectorAll("li");
    const realizadas = listaActividades.querySelectorAll(".realizada");

    const total = actividades.length;
    const totalRealizadas = realizadas.length;
    const totalPendientes = total - totalRealizadas; 
    
   totalActividades.textContent = total;
   totalActividadesRealizadas.textContent = totalRealizadas;
   totalActividadesPendientes.textContent = totalPendientes;

   //Mostrar u ocultar mensaje cuando la lista este vacía

   if(total === 0){
      mensajeVacio.style.display = "block";
   } else {
      mensajeVacio.style.display = "none";
   }

}