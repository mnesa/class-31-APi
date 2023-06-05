const loadKanye = () => {
  fetch('https://api.kanye.rest/')
    .then(response => response.json())
  // .then(data=>console.log(data))
  .then(data => displayKanye(data))
}

const displayKanye = (kanye) => {
  document.getElementById('quote').innerText = kanye.quote;
}