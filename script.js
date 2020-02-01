'use strict'

// Obteniendo lista de paises del DOM
const countriesList = document.querySelector('.countries-list');

// Petición a la API
fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(function(countries){
        console.log(countries);        
        
        //Recorrer array con los paises 
        countries.forEach(country => {            
            // Template String
            var countryCard = `
                                <article class="country">
                                <div class="flag" style="background-image: url(${country.flag});"></div>
                                <div class="country-info">
                                    <div class="name">${country.name}</div>
                                    <div class="population"><span>Population: </span>${country.population}</div>
                                    <div class="region"><span>Region: </span>${country.region}</div>
                                    <div class="capital"><span>Capital: </span>${country.capital}</div>
                                </div>
                                </article>                                
                                `;

            // Insertando Template en la lista de paises
            countriesList.insertAdjacentHTML('beforeend', countryCard);
        });
    });

