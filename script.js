const populateLyrics = lyrics => {
  document.getElementById('root').innerHTML = `
    <h3>Lyrics:</h3>
    <p class="lyric-container">
      ${lyrics.replace(/\n/g, '<br />')}
    </p>
  `;
};

const show404 = () => {
  document.getElementById('root').innerHTML = `
    <div>
    Sorry, we could not find the song you were looking for!<br />
    Please try another song :).
    </div>
    `;
};
document.getElementById('artistSubmit').addEventListener('click', async evt => {
  evt.preventDefault();
  const artistName = document.getElementById('artistName').value;
  const songName = document.getElementById('songName').value;
  if (!artistName || !songName) {
    return;
  }
  const { lyrics } = await fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`).then(resp => resp.json());
  if (lyrics) {
    populateLyrics(lyrics);
  } else {
    show404();
  }
});
