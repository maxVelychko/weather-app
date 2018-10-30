import { connect } from 'react-redux';
import { fetchWeather } from "../actions/index";
import App from "../components/App";

const mapStateToProps = state => {
    return {
        fetched: state.fetched,
        weather: state.weather,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWeather: (city) => {
            dispatch(fetchWeather(city));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);