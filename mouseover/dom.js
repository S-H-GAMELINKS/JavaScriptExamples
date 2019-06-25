let mover = document.getElementById("mover")

mover.addEventListener("mouseleave", function() {
    document.body.style.background = "white";
})

mover.addEventListener("mouseover", function() {
    document.body.style.background = "blue";
});