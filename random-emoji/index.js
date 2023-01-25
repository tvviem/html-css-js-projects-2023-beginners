const btnEl = document.getElementById('btn');
const emojiNameEl = document.querySelector('.emoji-name');

const emoji = [];
const API_KEY = 'a089487663204f34de3f97578a4555cd8aac4042';

async function getEmoji() {
  let response = await fetch(
    `https://emoji-api.com/emojis?access_key=${API_KEY}`
  );
  data = await response.json();
  data.forEach((e) => {
    emoji.push({
      emojiName: e.character,
      emojiCode: e.unicodeName
    });
  });
}

getEmoji();

btnEl.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * emoji.length);
  btn.innerText = emoji[randomNumber].emojiName;
  emojiNameEl.innerText = emoji[randomNumber].emojiCode;
});
