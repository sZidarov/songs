function songs (input){
    let songsNumber = input.shift();
    let typeListToprint = input.pop();
    let inputLength = input.length;
    let songs = [];
    // create class 
    class Song {
        constructor (typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time; 
        };
    } 
    // create object for every song and pushing it to an array
    for (let i = 0; i < inputLength; i++){
        let songData = input[i].split('_');
        let typeList = songData[0];
        let name = songData[1];
        let time = songData[2];

        songs.push(new Song (typeList, name, time));    
    }
    // sorting songs by typeList
    let songsLength = songs.length;

    for (let j = 0 ;j < songsLength ; j++){
        let currentSong = songs[j];
        if (currentSong.typeList == typeListToprint || typeListToprint == "all"){
            console.log(currentSong.name);
        }
    }
}
songs([2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']
    );