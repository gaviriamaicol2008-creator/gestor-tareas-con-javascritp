//Capturamos los elementos usando el DOM

const mensajeError = document.getElementById("MensajeError");
const btnAgregar = document.getElementById("btnAgregar");
const imputActividad = document.getElementById("actividadImput")
const listaActividades = document.getElementById("listaActividades")
const mensajeVacio =document.getElementById("mensajeVacio")

const textoActividad =document.getElementById("totalActividades")
const totalActividadRealizada =document.getElementById("actividadesRealizadas")
const actividadesPendientes =document.getElementById("actividadesPendientes")

// Evento Para Agregar Actividad Al Hacer Click En El Boton 
btnAgregar.addEventListener("click", agregarActividad);

inputActividad.addEventListener("keypress", function(evento){
    if(event.key ===""){
        mensajeError.textContent
    }
}



// Funcion principal para agregar una actividad 
function agregarActividad() {
    const textoActividad = imputActividad.Value.trim();

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
    btnRealizada.textContent = "Realizado";
    btnRealizada.classList.add("btn-realizada");

    // Botón para marcar como eliminada

    const btnEliminada = document.createElement("Eliminatebutton");
    btnEliminada.textContent = "Eliminar";
    btnEliminada.classList.add("btn-eliminar");
    

    // Evento para marcar o desenmarcar como realizado

    btnRealizada.addEventListener("click", function(){
        nuevaActividad.classList.toggle("realizada");

        if(nuevaActividad.classList.contains("realizada")){
            btnRealizada.textContent = "Realizada";
        } else {
            btnRealizada.textContent = "Pendiente";
        }
    });

    btnEliminada.addEventListener("click", function(){
        listaActividades.removeChild(nuevaActividad);
    actualizarContadores();
    });
    //Agregamos los botones al contador 
    contenedorBotones.appendChild(btnRealizada);
    contenedorBotones.appendChild(btnEliminar);
    
    listaActividades.appendChild(nuevaActividad);

}

//Función para actualizar total, realizadas y pendientes
function actualizarContadores() {
    const actividades = listaActividades.querySelectorAll("li");
    const realizadas = listaActividades.querySelectorAll(".realizada");

    const total = actividades.length;
    const totaRealizadas = realizadas.length;
    const totalPendientes = total-totaRealizadas; 
 }