import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWeather();
    }

    render() {
        console.log("action-this.props.fetching", this.props);
        return (
            <View style={styles.container}>
                {this.props.fetching ? <Text>Fetching The Weather</Text> : (
                    <View style={styles.weatherContainer}>
                        <View style={styles.header}>
                            <MaterialCommunityIcons size={48} name="weather-sunny"/>
                            <Text style={styles.mediumText}>Temperature˚</Text>
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.mediumText}>So sunny</Text>
                            <Text style={styles.smallText}>It hurts my eyes!</Text>
                        </View>
                    </View>
                )}
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
