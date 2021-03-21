
var snareAudio = $('#danball');
var snareAudioEl = snareAudio.get(0);
snareAudioEl.currentTime = 0;
snareAudioEl.play();


snareDrum = $('#danball-Drum');
// Create a new timeline, that's paused by default
var snaretl = new TimelineMax({
  paused: true
});

// The animation tweens
snaretl.to(snareDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
       .to(snareDrum, 0.1, {scaleY: 0.9, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
       // The last tween, returns the element to it's original properties
       .to(snareDrum, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});


 function snare(){
   snaretl.restart();
   snaretl.play();
   var snareAudioEl = snareAudio.get(0);
    snareAudioEl.currentTime = 0;
    snareAudioEl.play();
 }

 var clickTouchSnareDone = false;
snareDrumAll.on("touchstart click", function() {
	if(!clickTouchSnareDone) {
		clickTouchSnareDone = true;
		setTimeout(function() {
			clickTouchSnareDone = false;
		}, 100);
		snare();
		return false;
	}
});
