const textarea = document.querySelector(".text-area");
const textarea2 = document.querySelector(".mensaje");
const encryptButton = document.querySelector(".btn-encriptar");
encryptButton.addEventListener("click", () => {
  const text = textarea.value;
  const encryptedText = encrypt(text);
  textarea2.value = encryptedText;
});
const encrypt = (text) => {
  const encryptionKey = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
  };
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const currentLetter = text[i];
    if (encryptionKey[currentLetter]) {
      encryptedText += encryptionKey[currentLetter];
    } else {
      encryptedText += currentLetter;
    }
  }
  return encryptedText;
};



// desencript  

// const decrypt = (encryptedText) => {
//   const decryptionKey = {
//     "enter": "e",
//     "imes": "i",
//     "ai": "a",
//     "ober": "o",
//     "ufat": "u"
//   };
//   let decryptedText = "";
//   let currentWord = "";
//   for (let i = 0; i < encryptedText.length; i++) {
//     const currentLetter = encryptedText[i];
//     currentWord += currentLetter;
//     if (decryptionKey[currentWord]) {
//       decryptedText += decryptionKey[currentWord];
//       currentWord = "";
//     }
//   }
//   return decryptedText;
// };

// const decryptButton = document.querySelector("#decrypt-button");
// decryptButton.addEventListener("click", () => {
//   const encryptedText = textarea.value;
//   const decryptedText = decrypt(encryptedText);
//   textarea.value = decryptedText;
// });
