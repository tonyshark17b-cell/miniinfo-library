const butten = document.querySelector(".slide")
const bar = document.querySelector(".bar")
const input = document.querySelector(".search")
const suggesion = document.querySelector(".suggesion")
const cards = document.querySelectorAll(".box")
const search = document.querySelector(".in")
const body = document.querySelector("body")

butten.addEventListener("click", (e) => {
    e.stopPropagation();
    bar.classList.toggle("active");
    input.value = "";
    suggesion.innerHTML = "";
})
bar.addEventListener("click", (e) => {
    e.stopPropagation();
})
body.addEventListener("click", () => {
    bar.classList.remove("active");
})
input.addEventListener("input", () => {
    const text = input.value.toLowerCase()
    suggesion.innerHTML = "";
    const message = document.querySelector(".result")
    if (message) {
        message.remove();
    }
    let found = false ;
    cards.forEach(card => {
        let found = true;
        const h2 = card.querySelector(".title");
        const title = h2.textContent.toLowerCase();
        if (title.startsWith(text) && text !== "") {
            card.style.display = "block"
            const div = document.createElement("div")
            div.textContent = h2.textContent;
            suggesion.appendChild(div);
            div.addEventListener("click", () => {
                input.value = div.textContent;
                cards.forEach(card => {
                    const title = card.querySelector(".title").textContent;
                    if (title === div.textContent) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                    suggesion.innerHTML = "";

                })
            })
        } else{
            card.style.display = "none";
        }
    if (text === "") {
        cards.forEach(card => {
            card.style.display = "block";
            suggesion.innerHTML = "";
        })
    }
    
}); if (!found && text !== "") {
    const count = document.querySelector(".cards")
    count.style.display ="block";
        const dill = document.createElement("div");
        dill.classList.add("result");
        dill.textContent = "No result found";

        document.querySelector(".cards").appendChild(dill);
    }
})