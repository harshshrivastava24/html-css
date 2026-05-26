let follower = document.querySelector(".follower")

console.log(follower)

window.addEventListener("mousemove", function(dets) {
    follower.style.top = dets.clientY + "px";
    follower.style.left = dets.clientX + "px";
})