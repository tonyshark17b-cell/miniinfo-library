const butten = document.querySelector(".slide")
const bar = document.querySelector(".bar")
butten.addEventListener("click", () => {
    bar.classList.toggle("active");
    console.log("hello");

})

