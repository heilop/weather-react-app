const location = 'Lima, pe';
const api_key = '2f06324e6cdc0972675772513dfaab1a';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
export const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;
