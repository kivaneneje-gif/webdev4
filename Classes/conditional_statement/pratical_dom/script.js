const message = document.getElementById("message");
const togglebtn = document.getElementById("togglebtn");

togglebtn.addEventListener("click", function () {
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});