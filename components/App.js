import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import weatherConditions from "../utils/WeatherConditions";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWeather();
    }

    render() {
        if (!this.props.fetched) {
            return (
                <View style={styles.container} >
                    <Text>Fetching The Weather</Text>
                </View>
            )
        }

        const { temperature, weather, city } = this.props.weather;
        return (
            <View style={[styles.container, { backgroundColor: weatherConditions[weather].color }]}>
                <View style={styles.weatherContainer}>
                    <View style={styles.header}>
                        <MaterialCommunityIcons
                            size={48}
                            name={weatherConditions[weather].icon}
                        />
                        <Text style={styles.mediumText}>{temperature}˚</Text>
                        <Text style={styles.mediumText}>{city}˚</Text>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.mediumText}>{weatherConditions[weather].title}</Text>
                        <Text style={styles.smallText}>{weatherConditions[weather].subtitle}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7b733',
    },
    weatherContainer: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    mediumText: {
        fontSize: 48,
    },
    smallText: {
        fontSize: 24,
    },
});

App.propTypes = {
    fetched: PropTypes.boolean,
    weather: PropTypes.object,
};
