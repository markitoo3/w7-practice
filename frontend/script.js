function Country(name, short, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

// Components
const header = (logo) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        <button></button>
    </header>
    `
}

const countryCard = (name, short, population, flag, continent) => {
    return `
    <div class="countryCard">
        <h1>Name: ${name}</h1>
        <h2>Short: ${short}</h2>
        <p>Population: ${population}</p>
        <p>Continent: ${continent}</p>
        <img src="${flag}" alt="flag.svg">
    </div>
    `;
}

const countryCards = (cardContent) => {
    return `
    <section class="countryCards">${cardContent}</section>
    `
}


const loadEvent = async _ => {
    // Get Data
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();

    // Process Data
    let countries = countryArr.map(function (country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0]);
    })
    console.log(countries);

    let cardContent = "";
    for (const country of countries) {
        cardContent += countryCard(country.name, country.short, country.population, country.flag, country.continent);
        
    }
    
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", header("Countries"))
    
    document.getElementById("root").insertAdjacentHTML("beforeend", countryCards(cardContent))
}

window.addEventListener("load", loadEvent)