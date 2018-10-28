import { connect } from 'react-redux';
import { fetchWeather } from "./actions";
import App from "./App";

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
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