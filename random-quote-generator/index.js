const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const apiURL = 'https://api.quotable.io/random';

async function getQuote() {
  try {
    btnEl.innerText = 'Loading...';
    btnEl.disabled = true;
    quoteEl.innerText = 'Updating...';
    authorEl.innerText = 'Updating...';
    const response = await fetch(apiURL);
    const { content, author } = await response.json();
    quoteEl.innerText = content;
    authorEl.innerText = '~ ' + author;
    btnEl.innerText = 'Get a quote';
    btnEl.disabled = false;
    // console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = 'An error happened, try again later';
    authorEl.innerText = 'An error happened';
    btnEl.innerText = 'Get a quote';
    btnEl.disabled = false;
  }
}

getQuote();

btnEl.addEventListener('click', getQuote);
