var video = document.getElementById("explosion");
$(document).scroll(function () {
    console.log("scroll to " + $(document).scrollTop());
    video.currentTime = $(document).scrollTop() / 100;
})