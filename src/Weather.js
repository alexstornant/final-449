import { useState, useEffect } from 'react';

import cloudy from './images/cloudy.png';
import partly from './images/partly.png';
import rainy from './images/rainy.png';
import sun from './images/sun.png';

function getWeatherIcon(shortForecast) {
    if (shortForecast.includes('Partly')) {
        return partly;
    } else if (shortForecast.includes('Cloudy')) {
        return cloudy;
    } else if (shortForecast.includes('Rain')) {
        return rainy;
    } else if (shortForecast.includes('Sunny')){
        return sun;
    } else {
        return partly;
    }
}


function Weather() {
    // days data from api
    const [days, setDays] = useState([]);

    /**
     * Get Weather info
     * use effect called when data updates
     */
    useEffect(() => {
        fetch('https://api.weather.gov/gridpoints/GRR/82,39/forecast')
        .then(response => response.json())
        .then(data => {
            let temp = [];
            temp.push(data.properties.periods[0]);
            for (let i = 1; i < 8; i += 2)
            {
                temp.push(data.properties.periods[i]);
            }
            setDays(temp);
        })
        .catch(error => console.error(error));
    }, [])


    return (
        <div className="h-[450px] w-[100%] bg-grey mb-12">
            <div className="mx-[4%] flex justify-evenly items-center">
                {days.map(day => (
                    <div key={day.number} className="h-[450px] w-[19%] flex flex-col items-center justify-evenly">
                        <h1 className='italic text-4xl'>{day.name}</h1>
                        <img src={getWeatherIcon(day.shortForecast)} alt={day.shortForecast}/>
                        <h2 className='text-2xl'>{day.shortForecast}</h2>
                        <h1 className='italic text-4xl'>{day.temperature}&deg;</h1>
                    </div>
                ))}
            </div> 
            <h1 className='text-center italic'>Weather In East Lansing</h1>
        </div>        
    );
};

export default Weather;
