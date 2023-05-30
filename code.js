var textoAencriptar = document.getElementById("texto");
var modificado = textoAencriptar;
var textoprocesado;
var respuesta = document.getElementById("textoEncriptado");

var divmuneco = document.getElementById("nomuneco");
var divrespuesta = document.getElementById("textocontenedor");
var divboton = document.getElementById("botoncontenedor");
var divexito = document.getElementById("exitotext");

function encriptar() {
  if (
    textoAencriptar.value.length !== 0 &&
    textoAencriptar.value === modificado.value.toUpperCase()
  ) {
    alert("Utiliza solo minúsculas");
  } else {
    textoprocesado = textoAencriptar.value.replace(/e/g, "enter");
    textoprocesado = textoprocesado.replace(/i/g, "imes");
    textoprocesado = textoprocesado.replace(/a/g, "ai");
    textoprocesado = textoprocesado.replace(/o/g, "ober");
    textoprocesado = textoprocesado.replace(/u/g, "ufat");

    respuesta.innerText = textoprocesado;
    OMdivs();
  }

  textoAencriptar.value = "";
}

function desencriptar() {
  if (
    textoAencriptar.value.length !== 0 &&
    textoAencriptar.value === modificado.value.toUpperCase()
  ) {
    alert("Utiliza solo minúsculas");
  } else {
    textoprocesado = textoAencriptar.value.replace(/enter/g, "e");
    textoprocesado = textoprocesado.replace(/imes/g, "i");
    textoprocesado = textoprocesado.replace(/ai/g, "a");
    textoprocesado = textoprocesado.replace(/ober/g, "o");
    textoprocesado = textoprocesado.replace(/ufat/g, "u");

    respuesta.innerText = textoprocesado;
    OMdivs();
  }

  textoAencriptar.value = "";
}

function ocultarM() {
  divmuneco.style.display = "none";
}

function mostrarT() {
  divrespuesta.style.display = "block";
  divboton.style.display = "block";
  divexito.style.display = "none";
}

function ocultarT() {
  divrespuesta.style.display = "none";
  divboton.style.display = "none";
}

function mostrarM() {
  divmuneco.style.display = "block";
}

function OMdivs() {
  if (textoAencriptar.value.length !== 0) {
    ocultarM();
    mostrarT();
  } else {
    ocultarT();
    mostrarM();
  }
}

function copiar() {
  navigator.clipboard.writeText(respuesta.innerText);
  divexito.style.display = "block";
}
