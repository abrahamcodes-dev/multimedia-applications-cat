const video = document.getElementById("wildlifeVideo");
const button = document.getElementById("videoButton");

button.addEventListener("click", function () {
    if (video.classList.contains("hidden")) {
        video.classList.remove("hidden");
        video.play();
    } else if (video.paused) {
        video.play();
    } else {
        video.pause();
        video.classList.add("hidden");
    }
});
