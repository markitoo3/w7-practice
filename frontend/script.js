
const form = function() {
    return `
    <input class="input1"></input>
    <input class="input2"></input>
    <input class="input3"></input>
    <button class="button">Ne ne ne</button>
    `;
}



function loadEvent() {
    console.log("load");
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", form())

    const inputList = document.querySelectorAll("input")
    for (const input of inputList) {
        input.addEventListener("input", function(event){
            console.log(event.target.value);
        })
            
    }
}
window.addEventListener("load", loadEvent)