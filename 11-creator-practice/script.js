let follower = document.querySelector(".follower")
let a = document.querySelectorAll('a')
let list = document.querySelector(".list")

window.addEventListener("mousemove", function(dets) {
    follower.style.top = dets.clientY + "px";
    follower.style.left = dets.clientX + "px";
})

let menu = document.querySelector('.menu-i')
let closing = document.querySelector('.close')

menu.addEventListener("click", function() {
    a.forEach((node)=> {
        node.style.display = "initial"
    })

    menu.style.display = "none"
    closing.style.display = "initial"
    list.style.padding = 1 + "rem"
})
closing.addEventListener("click", function() {
    a.forEach((node)=> {
        node.style.display = "none"
    })

    menu.style.display = "initial"
    closing.style.display = "none"
    list.style.padding = 0 + "rem"

})
