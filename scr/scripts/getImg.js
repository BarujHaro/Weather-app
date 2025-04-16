
export async function getimage(location){
    
    const key ='rLmT8VE9r6n759bqxeFbnVGS5Po0mMZR86FW18xEO2dTrYHpt9EEN7YU';


    const response = await fetch(`https://api.pexels.com/v1/search?query=${location}&per_page=1`, {
      headers: {
        Authorization: key
      }
    })
    try{
        if(!response.ok){
            throw new Error('Network response was not ok');

        }

        const data = await response.json()

        if(!data){
            console.log('Error');

        }else{
            const imageUrl = data.photos[0].src.landscape || data.photos[0].src.original;
            document.getElementById('CImg').style.backgroundImage = `url(${imageUrl})`;
      
        }


    }catch(error){
        console.log(error);
    }

}

