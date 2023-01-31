const textarea = document.querySelector(".text-area");
const textarea2 = document.querySelector(".mensaje");
const encryptButton = document.querySelector(".btn-encriptar");
const decryptButton = document.querySelector(".btn-desencriptar");
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
// Un objeto que almacena las claves y sus valores de reemplazo
const encriptado = (text) => {
  const encriptarKey = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
  };
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


