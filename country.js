class Country {
    constructor(Name, lang, greeting, colors) {
        this.Name = Name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["green", "white", "red"]);
let italy = new Country("Italy", "Italian", "Ciao", ["green", "red", "white"]);
let france = new Country("France", "Baguette", "Bonjour", ["darkblue", "white", "red"]);
let finland = new Country("Finland", "Finnish", "Hei", ["white", "blue", "blue"]);

function SwitchCountry() {
    let country;
    let input = document.getElementById("CountryList").value;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/188px-Flag_of_the_United_States.svg.png"/> `

    }
    else if (input === "Mexico") {
        country = mexico;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/188px-Flag_of_Mexico.svg.png"/> `
    }
    else if (input === "Algeria") {
        country = algeria;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/188px-Flag_of_Algeria.svg.png"/> `
    }
    else if (input === "Italy") {
        country = italy;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/188px-Flag_of_Italy.svg.png"/> `
    }
    else if (input === "France") {
        country = france;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/188px-Flag_of_France.svg.png"/> `
    }
    else if (input === "Finland") {
        country = finland;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/188px-Flag_of_Finland.svg.png"/> `
    }
    DisplayColor(country);
    DisplayInfo(country);
}

function DisplayColor(country){
    document.getElementById("Color1").style.backgroundColor = `${country.colors[0]}`; 
    document.getElementById("Color2").style.backgroundColor = `${country.colors[1]}`;
    document.getElementById("Color3").style.backgroundColor = `${country.colors[2]}`;
}

function DisplayInfo(country){
    document.getElementById("CountryName").innerHTML = `<p>${country.Name}</p>`;
    document.getElementById("OfficialLanguage").innerHTML = `<p>${country.lang}</p>`;
    document.getElementById("HelloWorld").innerHTML = `<p> ${country.greeting} </p>`;
}

