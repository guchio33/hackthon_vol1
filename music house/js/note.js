function note(n) {
    if (n == 0) {
        var audio = new Audio("./sound/sound_note/guitar1.mp3");
    } else if (n == 1) {
        var audio = new Audio("./sound/sound_note/guitar2.mp3");
    } else if (n == 2) {
        var audio = new Audio("./sound/sound_note/guitar3.mp3");
    } else if (n == 3) {
        var audio = new Audio("./sound/sound_note/guitar4.mp3");
    } else if (n == 4) {
        var audio = new Audio("./sound/sound_note/guitar5.mp3");
    } else if (n == 5) {
        var audio = new Audio("./sound/sound_note/guitar6.mp3");
    } else if (n == 6) {
        var audio = new Audio("./sound/sound_note/guitar7.mp3");
    }
    audio.play();
}
