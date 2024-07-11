let player = document.querySelector(".player")
let block = document.querySelector(".block")
console.log(player, block);
block.addEventListener("animationiteration", function () {
    let randomPos = Math.floor(Math.random() * 4) * 100
    console.log(randomPos)
    block.style.left = randomPos + "px"
})
function moveUp() {
    let curPos = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    let newPos = curPos - 100
    console.log(newPos)
    player.style.top = newPos + "px"
}
function moveDown() {
    let curPos = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    let newPos = curPos + 100
    if (curPos >= 450) return;
    player.style.top = newPos + "px"
}

function moveLeft() {
    let curPos = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
    console.log(curPos)
    let newPos = curPos - 100
    if (curPos <= 0) return;
    player.style.left = newPos + "px"
}
function moveRight() {
    let curPos = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
    let newPos = curPos + 100
    if (curPos >= 300) return;
    player.style.left = newPos + "px"
}
document.addEventListener("keydown", function (e) {
    console.log(e.key)
    if (e.key == "ArrowLeft") moveLeft()
    if (e.key == "ArrowRight") moveRight()
    if (e.key == "ArrowUp") moveUp()
    if (e.key == "ArrowDown") moveDown()
})
setInterval(() => {
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    // console.log(playerLeft,blockTop)
    if (playerLeft == blockLeft && blockTop < 450 && blockTop > 360) {
        alert("game over!!!!")
    }
}, 1)