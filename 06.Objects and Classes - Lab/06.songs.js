function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();
    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if(typeSong === "all") {
       // songs.forEach(i => console.log(i.name))
       for(let newSong of songs) {
           console.log(newSong.name);
       }
    } else {
        let filtered = songs.filter(i => i.type === typeSong);
       // filtered.forEach(i => console.log(i.name));
        for(let newSong of filtered) {
           console.log(newSong.name);
        }
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);