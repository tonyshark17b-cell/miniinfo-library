const butten = document.querySelector(".slide")
const bar = document.querySelector(".bar")
butten.addEventListener("click", () => {
    bar.classList.toggle("active");
    console.log("hello");

})
const input = document.querySelector(".search")
const suggesion = document.querySelector(".suggesion")
const cards = document.querySelectorAll(".box")
const search = document.querySelector(".in")

input.addEventListener("input", () => {
    const text = input.value.toLowerCase()
    suggesion.innerHTML = "";
    cards.forEach(card => {
        const h2 = card.querySelector(".title");
        console.log(h2)
        const title = h2.textContent.toLowerCase();
        if (title.startsWith(text) && text !== "") {
            card.style.display = "block"
            const div = document.createElement("div")
            div.textContent = h2.textContent;
            suggesion.appendChild(div)
        } else {
            card.style.display = "none"
        }
        if (text === "") {
            cards.forEach(card => {
                card.style.display = "block";
            })
            suggesion.innerHTML = "";
        }

    });
})