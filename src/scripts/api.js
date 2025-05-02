
export async function getWeatherData(location) {
    const key = process.env.WEATHER_API_KEY;
    const response = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${key}&contentType=json`);
    
    try{
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json()

        if(!data || !data.currentConditions){
            console.log("Error")
        }else{

            return data;

        }
    
    }catch(error){
        
        console.error('Error: ',error);
    }
}

