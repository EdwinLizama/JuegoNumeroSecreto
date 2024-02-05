// Función que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
  }
  
  // Función que muestra un mensaje final en el HTML
  function mostrarMensajeFinal(mensaje) {
    asignarTextoElemento("p", mensaje);
    document.getElementById("reiniciar").removeAttribute("disabled");
  }
  
  // Función que limpia el contenido del cuadro de texto
  function limpiarCajaTexto() {
    document.getElementById("numeroUsuario").value = "";
  }
  
  // Constantes del juego
  const numeroMaximo = 10; // Número máximo para el juego
  let contador = 1; // Contador de intentos
  let numeroSecreto; // Número secreto
  let listaNumerosSorteados = []; // Lista de números sorteados
  
  // Mensaje inicial del juego
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Tienes 3 intentos para adivinar el número secreto entre 1 y ${numeroMaximo}`);
  
  // Función que verifica el intento del usuario
  function verificarIntento() {
    // Obtiene el valor ingresado por el usuario
    const valorUsuario = parseInt(document.getElementById("numeroUsuario").value);
  
    // Comprueba si se ha alcanzado el límite de intentos
    if (contador === 3) {
      mostrarMensajeFinal(`Lo siento, has agotado tus intentos. El número secreto era ${numeroSecreto}`);
      return;
    }
  
    // Comprueba si el usuario adivinó el número secreto
    if (valorUsuario === numeroSecreto) {
      mostrarMensajeFinal(`¡Acertaste el número secreto en ${contador} ${contador === 1 ? "intento" : "intentos"}!`);
      return;
    }
  
    // Muestra una pista al usuario
    asignarTextoElemento("p", valorUsuario < numeroSecreto ? "El número secreto es mayor que el número ingresado" : "El número secreto es menor que el número ingresado");
  
    // Incrementa el contador de intentos
    contador++;
  
    // Limpia el contenido del cuadro de texto
    limpiarCajaTexto();
  }
  
  // Función que genera un número secreto aleatorio
  function generarNumeroSecreto() {
    // Comprueba si ya se han sorteado todos los números
    if (listaNumerosSorteados.length === numeroMaximo) {
      mostrarMensajeFinal("No hay más números para sortear");
      return null;
    }
  
    // Genera un número aleatorio
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(listaNumerosSorteados)
    // Comprueba si el número ya ha sido sorteado
    if (listaNumerosSorteados.includes(numeroSecreto)) {
      // Si el número ya ha sido sorteado, se genera otro
      return generarNumeroSecreto();
    } else {
      // Si el número no ha sido sorteado, se agrega a la lista y se devuelve
      listaNumerosSorteados.push(numeroSecreto);
      return numeroSecreto;
    }
  }
  
  // Función que reinicia el juego
  function reiniciarJuego() {
    // Limpia el cuadro de texto
    limpiarCajaTexto();
  
    // Reinicia el contador de intentos
    contador = 1;
  
    // Genera un nuevo número secreto
    numeroSecreto = generarNumeroSecreto();
  
    // Muestra el mensaje inicial del juego
    asignarTextoElemento("p", `Tienes 3 intentos para adivinar el número secreto entre 1 y ${numeroMaximo}`);
  
    // Deshabilita el botón de reiniciar hasta que se ingrese un nuevo intento
    document.getElementById("reiniciar").setAttribute("disabled", true);
  }
  

  