let num = 3; // # of tracks to display

let top_track_request = "http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&format=json" +
                        "&api_key=0bf7e6c7cb7263a825e0cc0c7ec3f39d" +
                        "&user=" + "jinyizh" +
                        "&period=" + "1month" +
                        "&limit=" + num;

let tracks= [], artists = [];

$.getJSON(top_track_request, function(data) {
    // console.log(data);

    // collect data
    for (let i = 0; i < num; i++) {
        let track = [data.toptracks.track[i].name, data.toptracks.track[i].url];
        tracks.push(track);
        let artist = [data.toptracks.track[i].artist.name, data.toptracks.track[i].artist.url];
        artists.push(artist);
    }

    // resume working when I have more time:

    // track_trim = encodeURIComponent(data.toptracks.track[0].name.trim());
    // artist_trim = encodeURIComponent(data.toptracks.track[0].artist.name.trim());

    // // image only works here, same issue reported on StackOverflow
    // let track_request = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&format=json" +
    //                     "api_key=0bf7e6c7cb7263a825e0cc0c7ec3f39d" +
    //                     "&track=" + track_trim +
    //                     "&artist=" + artist_trim;
    // console.log(track_request);

    // $.getJSON(track_request, function(data) {
    //     console.log(data);
    // });

    // append to parent p
    let passage = document.getElementById("music");
    for (let i = 0; i < num; i++) {
        let record = document.createElement('p');
        // record.innerHTML += "<img src='" + pictures[i][0]["#text"] + "' alt='album'>";
        record.innerHTML += (i + 1) + ". " + "<a href='" + artists[i][1] + "'>" + artists[i][0] + "</a>";
        record.innerHTML += " - ";
        record.innerHTML += "<a href='" + tracks[i][1] + "'>\"" + tracks[i][0] + "\"</a>";
        passage.appendChild(record);
    }
    passage.style.fontSize = "small";
});