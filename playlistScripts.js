const list = document.querySelector("#Playlist");
let data;

  fetch('./db.json')
    .then(res => res.json())
    .then(fetchedData => {
      data = fetchedData;
      console.log(data);
      data.forEach(i => {
        const item = document.createElement('li');
        const song = document.createElement('audio');

        item.textContent = i.artist + " - " + i.name;

        song.src = i.music;
        song.controls = true;
        item.onclick = () => {
          song.play();
        }

        item.appendChild(song);
        list.appendChild(item);
      });
    })