
const video = document.getElementById("wildlifeVideo");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {

```
if (video.paused) {

    video.style.display = "block";
    video.play();

} else {

    video.style.display = "none";

}
```

});
