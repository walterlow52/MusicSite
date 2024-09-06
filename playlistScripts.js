const list = document.querySelector("#Playlist");
let i;

  fetch('./db.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.forEach(i => {
        const item = document.createElement('li');
        const song = document.createElement('audio');

        console.log(i);

        item.textContent = i.artist + " - " + i.name;
        item.onclick = () => {
        document.body.style.backgroundImage = "url(" + i.img + ")";
        }
        item.style.backgroundColor = i.bg;
        item.style.color = i.txt;
        item.style.fontWeight = i.deco;
        item.style.textShadow = i.shadow;

        song.src = i.music;
        song.controls = true;

        item.appendChild(song);
        list.appendChild(item);
      });
    })