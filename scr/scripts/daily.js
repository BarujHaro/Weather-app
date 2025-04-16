function daily(data){
    const Wdays = document.getElementById('Wdays');
    Wdays.style.display = 'block';
    Wdays.innerHTML = '<h2>Daily</h2><div id="day-scroll"></div>';

    const dayscroll = document.getElementById('day-scroll');

    for(let i=0; i<7; i++){
        const dayData = data.days[i];
        const celsius = ((dayData.temp - 32) * (5 / 9)).toFixed(1);
        const iconName = dayData.icon;
        const iconPath = require(`../images/${iconName}.png`);
        const dayBlock = `
        <div class="day-card">
        <p><strong>${dayData.datetime}</strong></p>
        <img src="${iconPath}" alt="${iconName}" width="40" height="40" />
        <p>${dayData.conditions}</p>
        <p>${celsius}°C</p>
        <p>${dayData.temp}°F</p>
        <p>Hum: ${dayData.humidity}</p>
    </div>
    `;
    dayscroll.innerHTML += dayBlock;

    }
    
  
}

export {daily};