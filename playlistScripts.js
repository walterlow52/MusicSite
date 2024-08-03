const list = document.querySelector("#Playlist");

  fetch('./db.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.forEach(i => {
        const item = document.createElement('li');
        const song = document.createElement('audio');

        item.textContent = i.artist + " - " + i.name;

        song.src = i.music;
        song.controls = true;

        item.appendChild(song);
        list.appendChild(item);
      });
    })