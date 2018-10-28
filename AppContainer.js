import { connect } from 'react-redux';
import { fetchWeather } from "./actions";
import App from "./App";

const mapStateToProps = state => {
    return {
        fetched: state.fetched,
        weather: state.weather,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWeather: () => {
            dispatch(fetchWeather());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);