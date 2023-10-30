document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("my-audio");
    const playPauseButton = document.getElementById("play-pause-music");
    const circle0 = document.getElementById("circle000");
    const circle1 = document.getElementById("circle001");

    playPauseButton.addEventListener("click", function () {
        if (audio.paused) {
            // Reproducir la música si está pausada
            audio.play();
            playPauseButton.textContent = "Pausar música";
            circle0.style.animation = "scaleAnimation 0.6s infinite 0.5s";  
            circle1.style.animation = "scaleAnimation 0.6s infinite 0s";           
       } else {
            // Pausar la música si se está reproduciendo
            audio.pause();
            playPauseButton.textContent = "Reproducir música";
            circle0.style.animation = "none";
            circle1.style.animation = "none";
        }
    });
});