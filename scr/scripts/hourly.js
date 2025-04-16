function hourly(data) {
    const hours = document.getElementById('hours');
    hours.style.display = 'block';
    hours.innerHTML = '<h2>Hourly</h2><div id="hour-scroll"></div>';

    const hourScroll = document.getElementById('hour-scroll');

    for (let i = 0; i < 24; i++) {
        const hourData = data.days[0].hours.find(h => parseInt(h.datetime.split(":")[0]) === i);
            const celsius = ((hourData.temp - 32) * (5 / 9)).toFixed(1);
            const iconName = hourData.icon;
            const iconPath = require(`../images/${iconName}.png`);
            const hourBlock = `
                <div class="hour-card">
                    <p><strong>${hourData.datetime.slice(0, 5)}</strong></p>
                    <img src="${iconPath}" alt="${iconName}" width="40" height="40" />
                    <p>${hourData.conditions}</p>
                    <p>${celsius}°C</p>
                    <p>${hourData.temp}°F</p>
                    <p>Hum: ${hourData.humidity}</p>
                </div>
            `;
            hourScroll.innerHTML += hourBlock;
        
    }

    
}
export { hourly };
