

function drum(a) {
    if (a == 0) {
        var audio = new Audio("./sound/sound_dust/bassdrum.wav");
    } else if (a == 1) {
        var audio = new Audio("./sound/sound_dust/cymbal.wav");
    } else if (a == 2) {
        var audio = new Audio("./sound/sound_dust/hat.wav");
    } else if (a == 3) {
        var audio = new Audio("./sound/sound_dust/snare.wav");
    } else if (a == 4) {
        var audio = new Audio("./sound/sound_dust/tom.wav");
    }

    audio.play();
}

function page2() { //ページ移動
    location.replace("room1.html");
}
