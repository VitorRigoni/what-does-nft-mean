(async () => {
  const getAllWords = async () => {
    const data = await fetch("words.json");
    return data.json()
  };

  const allWords = await getAllWords();

  const getItemFromList = (items) => items[Math.floor(Math.random()*items.length)];
  const capitalizeFirstLetter = s => s.replace(/./, c => c.toUpperCase())
  const n = document.getElementById("n");
  const f = document.getElementById("f");
  const t = document.getElementById("t");
  const generateNewWord = () => {
    n.innerText = capitalizeFirstLetter(getItemFromList(allWords["n"]));
    f.innerText = capitalizeFirstLetter(getItemFromList(allWords["f"]));
    t.innerText = capitalizeFirstLetter(getItemFromList(allWords["t"]));
  };

  document.getElementById("reload").addEventListener("click", generateNewWord);
  generateNewWord()
})();
