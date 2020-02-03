// Obrentiendo codigo del país de la URL
const paramsURL = window.location.search.slice(1);

// // FETCH API

// Obteniendo contenedor pais del DOM
const countriesList = document.querySelector('.country-container');

// Petición a la API
fetch(`https://restcountries.eu/rest/v2/alpha/${paramsURL}`)
    .then(response => response.json())
    .then(function(country){
        // Template string  
        var countryInfo = `
                            <div class="flag"><img src="${country.flag}" alt="${country.name}"></div>
                            <div class="country-info">
                                <div class="name">${country.name}</div>                       
                                <div class="contain-boxes">
                                    <div class="box1">                                    
                                        <div class="native-name"><span>Native name: </span>${country.nativeName}</div>
                                        <div class="population"><span>Population: </span>${country.population}</div>
                                        <div class="region"><span>Region: </span>${country.region}</div>
                                        <div class="sub-region"><span>Sub Region: </span>${country.subregion}</div>
                                        <div class="capital"><span>Capital: </span>${country.capital}</div>
                                    </div>
                                    <div class="box2">
                                        <div class="top-level-domain"><span>Top Level Domain: </span>${recorrerArray(country.topLevelDomain)}</div>
                                        <div class="currencies"><span>Currencies: </span>${recorrerArray(country.currencies)}</div>
                                        <div class="languages"><span>Languages: </span>${recorrerArray(country.languages)}</div>
                                    </div>
                                </div>
                                <div class="border-countries"><span>Border Countries: </span>${recorrerArray(country.borders)}</div>
                            </div>                                                         
                            `

        // Funcion para recorrer Array 
            function recorrerArray(array){
                var elementosArray = [];
                for (let i = 0; i < array.length; i++) {
                    const element = array[i];

                    typeof element === 'object' ? elementosArray.push(element.name) : elementosArray.push(element);                       
                }
                return elementosArray.join(", ");
            }

        // Insertando Template en el bloque de pais
        countriesList.insertAdjacentHTML('beforeend', countryInfo);

        // Haciendo visible el back
        const searchBlock = document.querySelector('.back-page').style.display = "inline-block";

        // Ocultando el loading        
        document.querySelector('.loading').style.display = "none";
    });

// THEME SWITCH

// Obteniendo elementos del DOM
const toggleButton = document.querySelector('#theme-switch');
const moonImage = document.querySelector('#theme-switch img');
const body = document.querySelector('body');
const backArrow = document.querySelector('.back-page img');

// Evento click en toggleButton
toggleButton.addEventListener('click', function(){
    // Agregando clase "Dark" al body
    body.classList.toggle('dark');    
    
    // Insertando imagen según modo activado
    if(body.classList.value === 'dark'){
        moonImage.setAttribute('src', './img/moon-solid.svg');
        backArrow.setAttribute('src', './img/long-arrow-alt-left-solid-white.svg');
    }else{ 
        moonImage.setAttribute('src', './img/moon-regular.svg'); 
        backArrow.setAttribute('src', './img/long-arrow-alt-left-solid.svg');
    }
});

