const textarea = document.querySelector(".text-area");
const textarea2 = document.querySelector(".mensaje");
const encryptButton = document.querySelector(".btn-encriptar");
const decryptButton = document.querySelector(".btn-desencriptar");
const button = document.querySelector(".btn-Copiar");
button.addEventListener("click", copyText);
encryptButton.addEventListener("click", () => {
  const text = textarea.value;
  const encriptarText = encriptado(text);
  textarea2.value = encriptarText;
});
decryptButton.addEventListener("click", () => {
  const mensaje = textarea.value;
  const desencriptar = desencriptado(mensaje);
  textarea2.value = desencriptar;
 });
 //desaparecemos la imagen
document.querySelector(".mensaje").addEventListener("focus", function() {  
  this.style.backgroundImage = "none";
});

function validarTexto(){
  let textoEscrito = document.querySelector(".text-area").value;
  let validador = textoEscrito.match(/^[a-z]*$/);

  if(!validador || validador === 0) {
      alert("Solo son permitidas letras minúsculas y sin acentos")
      location.reload();
      return true;
  }
}
// Un objeto que almacena las claves y sus valores de reemplazo
const encriptado = (text) => {
  const encriptarKey = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
  };
  text = text.toLowerCase();
  text = text.replace(/[^a-z\s]/g, "");
  let encriptarText = "";
  for (let i = 0; i < text.length; i++) {
    const letractual = text[i];
    if (encriptarKey[letractual]) {
      encriptarText += encriptarKey[letractual];
    } else {
      encriptarText += letractual;
    }
  }
  return encriptarText;
};

// Un objeto que almacena las claves y sus valores de reemplazo
const reemplazar = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u"
};

// Función que toma una cadena de texto y reemplaza las claves con sus valores correspondientes
function desencriptado(mensaje) {
  let desencriptar = mensaje;
  for (const key in reemplazar) {
    desencriptar = desencriptar.split(key).join(reemplazar[key]);
  }
  return desencriptar;
}
// Función Copiar
function copyText() {
  const textArea = document.querySelector(".mensaje");
  textArea.select();
  document.execCommand("copy");
  alert("Texto copiado");
}
