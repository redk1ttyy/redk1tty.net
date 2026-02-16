const audio = document.getElementById('audio');
const playBtn = document.getElementById('playPause');
const playIcon = document.getElementById('playPauseIcon');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const volumeIcon = document.getElementById('volumeIcon');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.classList = "icon-pause";
    } else {
        audio.pause();
        playIcon.classList = "icon-play";
    }
});

audio.addEventListener('loadedmetadata', () => {
    progress.max = Math.floor(audio.duration);
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    progress.value = Math.floor(audio.currentTime);
    currentTime.textContent = formatTime(audio.currentTime);
});

progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
});

volume.addEventListener('input', () => {
    audio.volume = volume.value;
	if (volume.value == 0) {
		volumeIcon.classList = "icon-volume muted";
	} else if (volume.value < .6) {
		volumeIcon.classList = "icon-volume low";
	} else {
		volumeIcon.classList = "icon-volume high";
	}
});
