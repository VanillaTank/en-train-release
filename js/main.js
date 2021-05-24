import phraseData from "./phrase-data.js";


window.onload = init;

//------------------------------------------------------------
function init () {
  const outputEn = document.querySelector('.output_en');
  const btnNewWord = document.querySelector('#btnNewWord');
  const btnCheckWord = document.querySelector('#btnCheckWord');
  const el = document.getElementById('input');

  createNewText ();

  btnNewWord.addEventListener('click', createNewText);

  btnCheckWord.addEventListener('click', () => {
    el.classList.remove('hidden')
  })


  function createNewText () {
    let enText = phraseData[Math.floor(Math.random() * phraseData.length)]
    outputEn.textContent = enText["ru"];
    el.value = enText[" en "];
    el.classList.add('hidden');
  }
}

