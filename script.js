// Get the audio player and play button elements
const audioPlayer = document.getElementById('music-player');
const playButton = document.getElementById('play-button');

// Toggle play/pause functionality on button click
playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pause Music';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play Music';
    }
});