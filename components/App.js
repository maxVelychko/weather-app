import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import weatherConditions from "../utils/WeatherConditions";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {text: ""};
    }

    componentDidMount() {
        this.props.fetchWeather();
    }

    handleSubmit() {
        this.props.fetchWeather(this.state.text);
    }

    render() {
        if (!this.props.fetched) {
            return (
                <View style={styles.container}>
                    <Text>Fetching The Weather</Text>
                </View>
            )
        }

        const { temperature, weather, city } = this.props.weather;
        return (
            <View style={[styles.container, {backgroundColor: weatherConditions[weather].color}]}>
                <View style={styles.header}>
                    <MaterialCommunityIcons
                        size={130}
                        name={weatherConditions[weather].icon}
                    />
                    <Text style={styles.mediumText}>{temperature}˚</Text>
                    <Text style={styles.mediumText}>{city}˚</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        clearButtonMode={"while-editing"}
                        placeholder={"Enter city"}
                        onChangeText={(text) => this.setState({text})}
                        onSubmitEditing={this.handleSubmit.bind(this)}
                    />
                </View>
                <View style={styles.body}>
                    <Text style={styles.mediumText}>{weatherConditions[weather].title}</Text>
                    <Text style={styles.smallText}>{weatherConditions[weather].subtitle}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7b733',
        padding: 20,
    },
    header: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: "#666",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 18,
    },
    body: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
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
