const list = document.querySelector("#Playlist");
let i;

  fetch('./db.json')
    .then(res => res.json())
    .then(data => {
      data.forEach(i => {
        const item = document.createElement('li');
        const song = document.createElement('audio');
        // const frame = document.createElement('iframe');
        
        item.textContent = i.artist + " - " + i.name;
        // frame.name = 
        item.onclick = () => {
          document.body.style.backgroundImage = "url(" + i.img + ")";
          song.src = i.music;
          song.controls = true;
          // frame.src = i.mv;
        }
        item.style.backgroundColor = i.bg;
        item.style.color = i.txt;
        item.style.fontWeight = i.deco;
        item.style.textShadow = i.shadow;

        item.appendChild(song);
        list.appendChild(item);
      });
    })