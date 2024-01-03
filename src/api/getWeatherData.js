import axios from 'axios';

const getWeatherData = async ({ city, lat, lon }) => {
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  // Here we make the  URL based on whether city or lat/lon is provided 
  let url;
  if (city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;
  } else if (lat && lon) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  } else {
    throw new Error('No city or latitude/longitude provided');
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    throw error; //Error catching in Axios
  }
};

export default getWeatherData;
