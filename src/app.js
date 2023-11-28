import "bootstrap";
import "./style.css";

const result = document.querySelector(".result");
const btn = document.querySelector("#buttonClick");
const texto = document.querySelector(".form-control");

btn.addEventListener("click", contador);

function contador() {
  if (!texto.value) {
    return;
  }

  let vowelCount = 0;
  let wordVal = texto.value.toLowerCase();

  let consonantCount = 0;
  let consonantVal = texto.value.toLowerCase();

  for (let i = 0; i < wordVal.length; i++) {
    let letterVowel = wordVal[i];

    if (letterVowel.match(/([a,e,i,o,u,á,é,í,ó,ú,ä,ë,ï,ö,ü])/)) {
      vowelCount++;
    }
  }

  for (let f = 0; f < consonantVal.length; f++) {
    let letterConsonant = consonantVal[f];
    if (
      letterConsonant.match(
        /(["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","x","y","z"])/
      )
    ) {
      consonantCount++;
    }
  }

  result.innerHTML = `
    <strong >${texto.value}</strong> tiene
    <strong class="destacado1">${vowelCount}</strong> vocales y
    <strong class="destacado1">${consonantCount}</strong> consonantes
  `;
}
