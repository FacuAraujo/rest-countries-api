'use strict'

// FETCH API

// Obteniendo lista de paises del DOM
const countriesList = document.querySelector('.countries-list');

// Petición a la API
fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(function(countries){ 
        //Recorrer array con los paises 
        var countries = countries;
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

        document.querySelector('.loading').style.display = "none";
    });

// THEME SWITCH

// Obteniendo elementos del DOM
const toggleButton = document.querySelector('#theme-switch');
const moonImage = document.querySelector('#theme-switch img');
const body = document.querySelector('body');

// Evento click en toggleButton
toggleButton.addEventListener('click', function(){
    // Agregando clase "Dark" al body
    body.classList.toggle('dark');    
    
    // Insertando imagen según modo activado
    if(body.classList.value === 'dark'){
        moonImage.setAttribute('src', './img/moon-solid.svg');
    }else{ moonImage.setAttribute('src', './img/moon-regular.svg'); }
});


// FILTER SELECT

// Obteniendo select del DOM
const regionSelect = document.getElementById('filter-region');

// Capturando evento change del select
regionSelect.addEventListener('change', (event) => {
    // Obteniendo todos los paises del DOM
    const countries = document.getElementsByClassName('country');
    // Variable con la region seleccionada desde el select
    var region = event.srcElement.value.toLocaleLowerCase();

    // Recorriendo todos los paises del DOM
    for (let i = 0; i < countries.length; i++) {
        const el = countries[i];
        // Obteniendo region de cada pais
        const elRegion = el.querySelector('.region').innerHTML.toLocaleLowerCase();        
        
        // Comprobar si coincide con la region seleccionada
        if(!elRegion.includes(region) && region !== 'filter by region'){
            el.style.display = "none";
        }else {
            el.style.display = "block";
        }
    }
});