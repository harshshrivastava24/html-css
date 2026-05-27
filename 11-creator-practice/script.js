let follower = document.querySelector(".follower")
let list = document.querySelectorAll('a')

window.addEventListener("mousemove", function(dets) {
    follower.style.top = dets.clientY + "px";
    follower.style.left = dets.clientX + "px";
})

let menu = document.querySelector('.menu-i')
let closing = document.querySelector('.close')

menu.addEventListener("click", function() {
    list.forEach((node)=> {
        node.style.display = "initial"
    })

    menu.style.display = "none"
    closing.style.display = "initial"
})
closing.addEventListener("click", function() {
    list.forEach((node)=> {
        node.style.display = "none"
    })

    menu.style.display = "initial"
    closing.style.display = "none"
})
