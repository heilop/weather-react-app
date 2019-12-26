import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({
  type: SET_CITY,
  payload
});
const setForecastData = payload => ({
  type: SET_FORECAST_DATA,
  payload
});

const api_key = '2f06324e6cdc0972675772513dfaab1a';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
  return (dispatch) => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

    // Enable state for search indicator.
    dispatch(setCity(payload));

    return fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);

        // Update state with results of promise (fetch).
        dispatch(setForecastData({city: payload, forecastData}));
      }
    )
  };
}
