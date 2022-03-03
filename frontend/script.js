
const formHTML = function() {
    return `
    <form>
        <input id="input1" name="input1"></input>
        <input id="input2" name="input2"></input>
        <input id="input3" name="input3"></input>
        <button class="button">Ne ne ne</button>
        <select name="animals" id="animals">
            <option value="both">Both</option>
            <option value="cats">Cats</option>
            <option value="dogs">Dogs</option>
        </select>
    </form>
    `;
}



async function loadEvent() {
    console.log("load");
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", formHTML())

    const form = rootElement.querySelector("form")

    const inputList = document.querySelectorAll("input")

    console.log(typeof inputList);
    console.log(Array.isArray(inputList));

    Array.from(inputList).map(function(input){
        input.addEventListener("input", function(event){
            console.log(event.target.value);
        })

    })

    form.querySelector("select").addEventListener("input", function(event){
        console.log(event.target.value)
    })

    form.addEventListener("submit", function(event) {
        event.preventDefault()
        console.log(event.target);
    })

    const apiKey = "bjPSaBwEj8Mv9s4xsdWquW3TFQ8ZPX4QUuUvCs6i"
    const requestedDate = "2020-08-16"
    const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`)

    const apodJson = await apod.json()

    /* console.log(apodJson.explanation); */

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`).then(
        function (apodResponse) {
            console.log(apodResponse);
            apodResponse.json().then(
                function (apodResponseJson) {
                    console.log(apodResponseJson.explanation);
                }
            )
        }
    )


    /* for (const input of inputList) {
        input.addEventListener("input", function(event){
            console.log(event.target.value);
        })
            
    } */
}
window.addEventListener("load", loadEvent)