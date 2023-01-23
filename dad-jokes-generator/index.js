const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = 'Nm5Vi/BZyaQe2HuObXskZA==QXZVrT1aaiOG10XU'; // old key

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey
  }
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
async function getJoke() {
  try {
    jokeEl.innerText = 'Updating...';
    btnEl.innerText = 'Loading...';
    btnEl.disabled = true;

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.innerText = 'Tell me a joke';
    btnEl.disabled = false;

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = 'An error happened, try again later';
    btnEl.innerText = 'Tell me a joke';
    btnEl.disabled = false;
  }
}

btnEl.addEventListener('click', getJoke);
