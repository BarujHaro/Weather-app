function displayCurrent(data){
    const today = document.getElementById('today');
    today.style.display = 'block';
    const celsius = ((data.currentConditions.temp - 32) * (5 / 9)).toFixed(1);
    const iconName = data.currentConditions.icon;
    console.log(data.currentConditions.icon);
    const iconPath = require(`../images/${iconName}.png`);
    console.log(iconPath);
    today.innerHTML = `
    <h2>Current Weather</h2>
    <div class="weather-header">
    <img src="${iconPath}" alt="${iconName}" width="64" height="64" />
    <p>${data.days[0].datetime} </p>
    <p>${data.currentConditions.datetime}</p>
    <p>${data.currentConditions.conditions}</p>
    </div>

    <div class="weather-detail">
    <p>F°</p>
    <p>${data.currentConditions.temp}</p>
    <p>C°</p>
    <p>${celsius}</p>
    <p>Humidity:</p>
    <p>${data.currentConditions.humidity}</p>
    <p>Wind:</p>
    <p>${data.currentConditions.windspeed}</p>
    <p>Univex:</p>
    <p>${data.currentConditions.uvindex}</p>
    <p>Sunrise:</p>
    <p>${data.currentConditions.sunrise}</p>
    <p>Sunset:</p>
    <p>${data.currentConditions.sunset}</p>
    </div>

    `;
  
}

export {displayCurrent};