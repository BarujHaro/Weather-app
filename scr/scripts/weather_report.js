//importar imagenes
import {getWeatherData} from './api.js';
import {displayCurrent} from './displayCurrent.js';
import { hourly } from './hourly.js';
import {daily} from './daily.js';
import {getimage} from './getImg.js';

function weather_report(){
    
    document.addEventListener('DOMContentLoaded', () => {
        const Contweather = document.getElementById('Contweather');
        const InputPlace = document.getElementById('place');
        const SearchBtn = document.getElementById('SearchBtn');
        const message = document.getElementById('message');
        const hours = document.getElementById('hours');
        const Wdays = document.getElementById('Wdays');
        const today = document.getElementById('today');

        SearchBtn.addEventListener('click', async () => {
            const location = InputPlace.value.trim();
            if (!location) {
                message.style.display = "block";
                hours.style.display = "none";
                today.style.display = "none";
                Wdays.style.display = "none";
                message.innerHTML = '<p>Please, write the name of the city</p>';
                return;
              }
              message.innerHTML = '<p>Loading...</p>';
              try{
                const data = await getWeatherData(location);
                console.log(data);
                message.style.display= "none";
                getimage(location);
                //Current day
                displayCurrent(data);
               //Hourly
                hourly(data);
               //Daily
               daily(data);
              }catch (error){
                message.style.display = "block";
                hours.style.display = "none";
                today.style.display = "none";
                Wdays.style.display = "none";
                message.innerHTML = `<p>Error</p>`;
                console.error(error);
            }


        })



    });


}
export {weather_report};