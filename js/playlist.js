$(document).ready(function () {
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1",
    }, [
        {
            title: "Concert",
            m4v: "videos/concert.mp4",
            ogv: "videos/concert.ogv",
            webmv: "videos/concert.webm",
            poster: "images/concert.jpeg"
        },
        {
            title: "Espectacle de teatre amb acrobàcies",
            m4v: "videos/teatre.mp4",
            ogv: "videos/teatre.ogv",
            webmv: "videos/teatre.webm",
            poster: "images/teatre-barcelona.jpg"
        },
        {
            title: "Espectacle de dansa",
            m4v: "videos/dansa.mp4",
            ogv: "videos/dansa.ogv",
            webmv: "videos/dansa.webm",
            poster: "images/portada-dansa.png"
        }
    ], {
        swfPath: "/js",
        supplied: "m4v, ogv, webmv",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    });
});