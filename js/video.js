var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	// console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	// console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Current speed is " + video.playbackRate)
	video.playbackRate *= 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	// console.log("Current speed is " + video.playbackRate)
	video.playbackRate /= 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	// add 15 secs each skip
	// when vid ends go back to beginning
	console.log("Original location " + video.currentTime)
	video.currentTime += 15
	 
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
		console.log("Going back to beginning")
		// console.log("New location " + video.currentTime)
		video.play()
	}
	// if (video.currentTime != video.duration) {
	// 	console.log("New location " + video.currentTime)
	// }
	console.log("New location " + video.currentTime)
	// video.onended = function() {
	// 	video.pause()
	// 	video.currentTime = 0
	// 	console.log("Going back to beginning")
	// 	console.log("New location " + video.currentTime)
	// 	video.play()
	// };
});

document.querySelector("#mute").addEventListener("click", function() {
	// console.log("The value of mute is " + video.muted)
	// if currently muted (muted = true)
	if (video.muted == true) {
	// set muted to false and update the text in the button
		video.muted = false
		this.innerHTML = 'Mute'
	}
	// else 
	else {
	// set muted to true and update the  text in the button
		video.muted = true
		this.innerHTML = 'Unmute'
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	// Use this value update the video volume AND update the volume element below 
	video.volume = this.value / 100
	console.log(this.value / 100)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});


document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

