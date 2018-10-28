const apiKey = "494b4ddeec5ea5aa7c917ade630337aa";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = () => {
    return (dispatch) => {
        dispatch(requestWeather());
        return fetch(`${apiUrl}?APPID=${apiKey}&q=London&units=metric`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(receiveWeather(data));
            });
    };
};

export const requestWeather = (data) => ({
    type: 'REQUEST_WEATHER', data,
});

export const receiveWeather = (data) => ({
    type: 'RECEIVE_WEATHER', data,
});