import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <MaterialCommunityIcons size={48} name="weather-sunny"/>
                    <Text style={styles.mediumText}>Temperature˚</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.mediumText}>So sunny</Text>
                    <Text style={styles.smallText}>It hurts my eyes!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7b733',
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
