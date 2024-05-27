//--------------------------------------------MODAL--------------------------------------------
//ESTRENOS
//El planeta de los Simios ESTRENOS
//Función para abrir ventana flotante (modal) El planeta de los Simios
function abrirVentana41 (){
    const ventana41 = document.getElementById("simios1");
    ventana41.classList.add("ventana41_mostrar");
}

//Función para cerrar ventana flotante (modal) El planeta de los Simios
function cerrarVentana41(){
    const ventana41 = document.getElementById("simios1");
    ventana41.classList.remove("ventana41_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor El planeta de los Simios
function fueraVentana41(evento){
    const ventana41 = document.getElementById("simios1");
    if (evento.target == ventana41){
        ventana41.classList.remove("ventana41_mostrar");
    }
}

// Agregar los event listerners El planeta de los simios
function iniciarVentana41(){
    const abrirVentanaSimios1 = document.getElementById("abrirVentanaSimios1");
    const cerrarVentanaSimios1 = document.querySelector(".cerrar41");

    abrirVentanaSimios1.addEventListener("click", abrirVentana41);
    cerrarVentanaSimios1.addEventListener("click", cerrarVentana41);
    window.addEventListener("click", fueraVentana41);
}

//Inicializar los event listeners El planeta de los simios
window.addEventListener("DOMContentLoaded", iniciarVentana41);




//Una jungla de locura ESTRENOS
//Función para abrir ventana flotante (modal) una jungla de locura 
function abrirVentana101 (){
    const ventana101 = document.getElementById("jungla1");
    ventana101.classList.add("ventana101_mostrar");
}

//Función para cerrar ventana flotante (modal) una jungla de locura
function cerrarVentana101(){
    const ventana101 = document.getElementById("jungla1");
    ventana101.classList.remove("ventana101_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor una jungla de locura
function fueraVentana101(evento){
    const ventana101 = document.getElementById("jungla1");
    if (evento.target == ventana101){
        ventana101.classList.remove("ventana101_mostrar");
    }
}

// Agregar los event listerners una jungla de locura
function iniciarVentana101(){
    const abrirVentanaJungla1 = document.getElementById("abrirVentanaJungla1");
    const cerrarVentanaJungla1 = document.querySelector(".cerrar101");

    abrirVentanaJungla1.addEventListener("click", abrirVentana101);
    cerrarVentanaJungla1.addEventListener("click", cerrarVentana101);
    window.addEventListener("click", fueraVentana101);
}

//Inicializar los event listeners una jungla de locura
window.addEventListener("DOMContentLoaded", iniciarVentana101);


//Firma Aquí
//Función para abrir ventana flotante (modal) Firma Aquí
function abrirVentana51 (){
    const ventana51 = document.getElementById("firma1");
    ventana51.classList.add("ventana51_mostrar");
}

//Función para cerrar ventana flotante (modal) Firma Aquí
function cerrarVentana51(){
    const ventana51 = document.getElementById("firma1");
    ventana51.classList.remove("ventana51_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor Firma Aquí
function fueraVentana51(evento){
    const ventana51 = document.getElementById("firma1");
    if (evento.target == ventana51){
        ventana51.classList.remove("ventana51_mostrar");
    }
}

// Agregar los event listerners Firma Aquí
function iniciarVentana51(){
    const abrirVentanaFirma1 = document.getElementById("abrirVentanaFirma1");
    const cerrarVentanaFirma1 = document.querySelector(".cerrar51");

    abrirVentanaFirma1.addEventListener("click", abrirVentana51);
    cerrarVentanaFirma1.addEventListener("click", cerrarVentana51);
    window.addEventListener("click", fueraVentana51);
}

//Inicializar los event listeners Firma Aquí
window.addEventListener("DOMContentLoaded", iniciarVentana51);



//PREVENTA
//Amigos Imaginarios PREVENTA
//Función para abrir ventana flotante (modal) Amigos Imaginarios
function abrirVentana21 (){
    const ventana21 = document.getElementById("amigos1");
    ventana21.classList.add("ventana21_mostrar");
}

//Función para cerrar ventana flotante (modal) Amigos Imaginarios 
function cerrarVentana21(){
    const ventana21 = document.getElementById("amigos1");
    ventana21.classList.remove("ventana21_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor Amigos Imaginarios
function fueraVentana21(evento){
    const ventana21 = document.getElementById("amigos1");
    if (evento.target == ventana21){
        ventana21.classList.remove("ventana21_mostrar");
    }
}

// Agregar los event listerners Amigos Imaginarios
function iniciarVentana21(){
    const abrirVentanaAmigos1 = document.getElementById("abrirVentanaAmigos1");
    const cerrarVentanaAmigos1 = document.querySelector(".cerrar21");

    abrirVentanaAmigos1.addEventListener("click", abrirVentana21);
    cerrarVentanaAmigos1.addEventListener("click", cerrarVentana21);
    window.addEventListener("click", fueraVentana21);
}

//Inicializar los event listeners Amigos Imaginarios
window.addEventListener("DOMContentLoaded", iniciarVentana21);



//Furiosa
//Función para abrir ventana flotante (modal) Furiosa
function abrirVentana61 (){
    const ventana61 = document.getElementById("furiosa1");
    ventana61.classList.add("ventana61_mostrar");
}

//Función para cerrar ventana flotante (modal) Furiosa
function cerrarVentana61(){
    const ventana61 = document.getElementById("furiosa1");
    ventana61.classList.remove("ventana61_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor Furiosa
function fueraVentana61(evento){
    const ventana61 = document.getElementById("furiosa1");
    if (evento.target == ventana61){
        ventana61.classList.remove("ventana61_mostrar");
    }
}

// Agregar los event listerners Furiosa 
function iniciarVentana61(){
    const abrirVentanaFuriosa1 = document.getElementById("abrirVentanaFuriosa1");
    const cerrarVentanaFuriosa1 = document.querySelector(".cerrar61");

    abrirVentanaFuriosa1.addEventListener("click", abrirVentana61);
    cerrarVentanaFuriosa1.addEventListener("click", cerrarVentana61);
    window.addEventListener("click", fueraVentana61);
}

//Inicializar los event listeners Furiosa
window.addEventListener("DOMContentLoaded", iniciarVentana61);




//TODAS LAS PELÍCULAS
//Abigail
//Función para abrir ventana flotante (modal) Abigail
function abrirVentana (){
    const ventana = document.getElementById("abigail");
    ventana.classList.add("ventana_mostrar");
}

//Función para cerrar ventana flotante (modal) Abigail
function cerrarVentana(){
    const ventana = document.getElementById("abigail");
    ventana.classList.remove("ventana_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor Abigail
function fueraVentana(evento){
    const ventana = document.getElementById("abigail");
    if (evento.target == ventana){
        ventana.classList.remove("ventana_mostrar");
    }
}

// Agregar los event listerners Abigail
function iniciarVentana(){
    const abrirVentanaAbigail = document.getElementById("abrirVentanaAbigail");
    const cerrarVentanaAbigail = document.querySelector(".cerrar");

    abrirVentanaAbigail.addEventListener("click", abrirVentana);
    cerrarVentanaAbigail.addEventListener("click", cerrarVentana);
    window.addEventListener("click", fueraVentana);
}

//Inicializar los event listeners Abigail
window.addEventListener("DOMContentLoaded", iniciarVentana);



//Amigos Imaginarios TODAS LAS PELÍCULAS
//Función para abrir ventana flotante (modal) Amigos Imaginarios
function abrirVentana2 (){
    const ventana2 = document.getElementById("amigos");
    ventana2.classList.add("ventana2_mostrar");
}

//Función para cerrar ventana flotante (modal) Amigos Imaginarios 
function cerrarVentana2(){
    const ventana2 = document.getElementById("amigos");
    ventana2.classList.remove("ventana2_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor Amigos Imaginarios
function fueraVentana2(evento){
    const ventana2 = document.getElementById("amigos");
    if (evento.target == ventana2){
        ventana2.classList.remove("ventana2_mostrar");
    }
}

// Agregar los event listerners Amigos Imaginarios
function iniciarVentana2(){
    const abrirVentanaAmigos = document.getElementById("abrirVentanaAmigos");
    const cerrarVentanaAmigos = document.querySelector(".cerrar2");

    abrirVentanaAmigos.addEventListener("click", abrirVentana2);
    cerrarVentanaAmigos.addEventListener("click", cerrarVentana2);
    window.addEventListener("click", fueraVentana2);
}

//Inicializar los event listeners Amigos Imaginarios
window.addEventListener("DOMContentLoaded", iniciarVentana2);




//Desafiantes
//Función para abrir ventana flotante (modal) Desafiantes
function abrirVentana3 (){
    const ventana3 = document.getElementById("desafiantes");
    ventana3.classList.add("ventana3_mostrar");
}

//Función para cerrar ventana flotante (modal) Desafiantes
function cerrarVentana3(){
    const ventana3 = document.getElementById("desafiantes");
    ventana3.classList.remove("ventana3_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor Desafiantes
function fueraVentana3(evento){
    const ventana3 = document.getElementById("desafiantes");
    if (evento.target == ventana3){
        ventana3.classList.remove("ventana3_mostrar");
    }
}

// Agregar los event listerners Desafiantes
function iniciarVentana3(){
    const abrirVentanaDesafiantes = document.getElementById("abrirVentanaDesafiantes");
    const cerrarVentanaDesafiantes = document.querySelector(".cerrar3");

    abrirVentanaDesafiantes.addEventListener("click", abrirVentana3);
    cerrarVentanaDesafiantes.addEventListener("click", cerrarVentana3);
    window.addEventListener("click", fueraVentana3);
}

//Inicializar los event listeners Desafiantes
window.addEventListener("DOMContentLoaded", iniciarVentana3);


//El planeta de los Simios
//Función para abrir ventana flotante (modal) El planeta de los Simios
function abrirVentana4 (){
    const ventana4 = document.getElementById("simios");
    ventana4.classList.add("ventana4_mostrar");
}

//Función para cerrar ventana flotante (modal) El planeta de los Simios
function cerrarVentana4(){
    const ventana4 = document.getElementById("simios");
    ventana4.classList.remove("ventana4_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor El planeta de los Simios
function fueraVentana4(evento){
    const ventana4 = document.getElementById("simios");
    if (evento.target == ventana4){
        ventana4.classList.remove("ventana4_mostrar");
    }
}

// Agregar los event listerners El planeta de los simios
function iniciarVentana4(){
    const abrirVentanaSimios = document.getElementById("abrirVentanaSimios");
    const cerrarVentanaSimios = document.querySelector(".cerrar4");

    abrirVentanaSimios.addEventListener("click", abrirVentana4);
    cerrarVentanaSimios.addEventListener("click", cerrarVentana4);
    window.addEventListener("click", fueraVentana4);
}

//Inicializar los event listeners El planeta de los simios
window.addEventListener("DOMContentLoaded", iniciarVentana4);



//Firma Aquí
//Función para abrir ventana flotante (modal) Firma Aquí
function abrirVentana5 (){
    const ventana5 = document.getElementById("firma");
    ventana5.classList.add("ventana5_mostrar");
}

//Función para cerrar ventana flotante (modal) Firma Aquí
function cerrarVentana5(){
    const ventana5 = document.getElementById("firma");
    ventana5.classList.remove("ventana5_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor Firma Aquí
function fueraVentana5(evento){
    const ventana5 = document.getElementById("firma");
    if (evento.target == ventana5){
        ventana5.classList.remove("ventana5_mostrar");
    }
}

// Agregar los event listerners Firma Aquí
function iniciarVentana5(){
    const abrirVentanaFirma = document.getElementById("abrirVentanaFirma");
    const cerrarVentanaFirma = document.querySelector(".cerrar5");

    abrirVentanaFirma.addEventListener("click", abrirVentana5);
    cerrarVentanaFirma.addEventListener("click", cerrarVentana5);
    window.addEventListener("click", fueraVentana5);
}

//Inicializar los event listeners Firma Aquí
window.addEventListener("DOMContentLoaded", iniciarVentana5);



//Furiosa
//Función para abrir ventana flotante (modal) Furiosa
function abrirVentana6 (){
    const ventana6 = document.getElementById("furiosa");
    ventana6.classList.add("ventana6_mostrar");
}

//Función para cerrar ventana flotante (modal) Furiosa
function cerrarVentana6(){
    const ventana6 = document.getElementById("furiosa");
    ventana6.classList.remove("ventana6_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor Furiosa
function fueraVentana6(evento){
    const ventana6 = document.getElementById("furiosa");
    if (evento.target == ventana6){
        ventana6.classList.remove("ventana6_mostrar");
    }
}

// Agregar los event listerners Furiosa 
function iniciarVentana6(){
    const abrirVentanaFuriosa = document.getElementById("abrirVentanaFuriosa");
    const cerrarVentanaFuriosa = document.querySelector(".cerrar6");

    abrirVentanaFuriosa.addEventListener("click", abrirVentana6);
    cerrarVentanaFuriosa.addEventListener("click", cerrarVentana6);
    window.addEventListener("click", fueraVentana6);
}

//Inicializar los event listeners Furiosa
window.addEventListener("DOMContentLoaded", iniciarVentana6);



//Garfield
//Función para abrir ventana flotante (modal) Garfield
function abrirVentana7 (){
    const ventana7 = document.getElementById("garfield");
    ventana7.classList.add("ventana7_mostrar");
}

//Función para cerrar ventana flotante (modal) Garfield
function cerrarVentana7(){
    const ventana7 = document.getElementById("garfield");
    ventana7.classList.remove("ventana7_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor Garfield
function fueraVentana7(evento){
    const ventana7 = document.getElementById("garfield");
    if (evento.target == ventana7){
        ventana7.classList.remove("ventana7_mostrar");
    }
}

// Agregar los event listerners Garfield
function iniciarVentana7(){
    const abrirVentanaGarfield = document.getElementById("abrirVentanaGarfield");
    const cerrarVentanaGarfield = document.querySelector(".cerrar7");

    abrirVentanaGarfield.addEventListener("click", abrirVentana7);
    cerrarVentanaGarfield.addEventListener("click", cerrarVentana7);
    window.addEventListener("click", fueraVentana7);
}

//Inicializar los event listeners Garfield
window.addEventListener("DOMContentLoaded", iniciarVentana7);


//Jugaremos en el bosque 
//Función para abrir ventana flotante (modal) jugaremos en el bosque 
function abrirVentana8 (){
    const ventana8 = document.getElementById("bosque");
    ventana8.classList.add("ventana8_mostrar");
}

//Función para cerrar ventana flotante (modal) jugaremos en el bosque
function cerrarVentana8(){
    const ventana8 = document.getElementById("bosque");
    ventana8.classList.remove("ventana8_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor jugaremos en el bosque
function fueraVentana8(evento){
    const ventana8 = document.getElementById("bosque");
    if (evento.target == ventana8){
        ventana8.classList.remove("ventana8_mostrar");
    }
}

// Agregar los event listerners jugaremos en el bosque
function iniciarVentana8(){
    const abrirVentanaBosque = document.getElementById("abrirVentanaBosque");
    const cerrarVentanaBosque = document.querySelector(".cerrar8");

    abrirVentanaBosque.addEventListener("click", abrirVentana8);
    cerrarVentanaBosque.addEventListener("click", cerrarVentana8);
    window.addEventListener("click", fueraVentana8);
}

//Inicializar los event listeners jugaremos en el bosque
window.addEventListener("DOMContentLoaded", iniciarVentana8);



//Profesión Peligro
//Función para abrir ventana flotante (modal) profesión peligro
function abrirVentana9 (){
    const ventana9 = document.getElementById("peligro");
    ventana9.classList.add("ventana9_mostrar");
}

//Función para cerrar ventana flotante (modal) profesión peligro
function cerrarVentana9(){
    const ventana9 = document.getElementById("peligro");
    ventana9.classList.remove("ventana9_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor peligro
function fueraVentana9(evento){
    const ventana9 = document.getElementById("peligro");
    if (evento.target == ventana9){
        ventana9.classList.remove("ventana9_mostrar");
    }
}

// Agregar los event listerners profesión peligro
function iniciarVentana9(){
    const abrirVentanaPeligro = document.getElementById("abrirVentanaPeligro");
    const cerrarVentanaPeligro = document.querySelector(".cerrar9");

    abrirVentanaPeligro.addEventListener("click", abrirVentana9);
    cerrarVentanaPeligro.addEventListener("click", cerrarVentana9);
    window.addEventListener("click", fueraVentana9);
}

//Inicializar los event listeners profesión peligro
window.addEventListener("DOMContentLoaded", iniciarVentana9);



//Una jungla de locura 
//Función para abrir ventana flotante (modal) una jungla de locura 
function abrirVentana10 (){
    const ventana10 = document.getElementById("jungla");
    ventana10.classList.add("ventana10_mostrar");
}

//Función para cerrar ventana flotante (modal) una jungla de locura
function cerrarVentana10(){
    const ventana10 = document.getElementById("jungla");
    ventana10.classList.remove("ventana10_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor una jungla de locura
function fueraVentana10(evento){
    const ventana10 = document.getElementById("jungla");
    if (evento.target == ventana10){
        ventana10.classList.remove("ventana10_mostrar");
    }
}

// Agregar los event listerners una jungla de locura
function iniciarVentana10(){
    const abrirVentanaJungla = document.getElementById("abrirVentanaJungla");
    const cerrarVentanaJungla = document.querySelector(".cerrar10");

    abrirVentanaJungla.addEventListener("click", abrirVentana10);
    cerrarVentanaJungla.addEventListener("click", cerrarVentana10);
    window.addEventListener("click", fueraVentana10);
}

//Inicializar los event listeners una jungla de locura
window.addEventListener("DOMContentLoaded", iniciarVentana10);


//PELÍCULA DEL MES 
//El planeta de los Simios PELÍCULA DEL MES 
//Función para abrir ventana flotante (modal) El planeta de los Simios
function abrirVentana42 (){
    const ventana42 = document.getElementById("simios2");
    ventana42.classList.add("ventana42_mostrar");
}

//Función para cerrar ventana flotante (modal) El planeta de los Simios
function cerrarVentana42(){
    const ventana42 = document.getElementById("simios2");
    ventana42.classList.remove("ventana42_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor El planeta de los Simios
function fueraVentana42(evento){
    const ventana42 = document.getElementById("simios2");
    if (evento.target == ventana42){
        ventana42.classList.remove("ventana42_mostrar");
    }
}

// Agregar los event listerners El planeta de los simios
function iniciarVentana42(){
    const abrirVentanaSimios2 = document.getElementById("abrirVentanaSimios2");
    const cerrarVentanaSimios2 = document.querySelector(".cerrar42");

    abrirVentanaSimios2.addEventListener("click", abrirVentana42);
    cerrarVentanaSimios2.addEventListener("click", cerrarVentana42);
    window.addEventListener("click", fueraVentana42);
}

//Inicializar los event listeners El planeta de los simios
window.addEventListener("DOMContentLoaded", iniciarVentana42);
