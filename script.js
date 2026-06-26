
const video = document.getElementById("wildlifeVideo");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {


 if (video.style.display === "none") {

        // Show and play the video
        video.style.display = "block";
        video.play();
        button.textContent = "Hide Video";

    } else {

        // Hide and pause the video
        video.pause();
        video.style.display = "none";
        button.textContent = "Play Video";

    }

});
