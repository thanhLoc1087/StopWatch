import { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import formatTime from 'minutes-seconds-milliseconds';

class MyWatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startTime: null,
            running: false,
            timeElapsed: null,
            laps: [],
        }
        this.handleLapPress = this.handleLapPress.bind(this)
        this.handleStartPress = this.handleStartPress.bind(this)
        this.startStopButton = this.startStopButton.bind(this)
    }

    lapButton() {
        return <TouchableHighlight onPress={this.handleLapPress}
                underlayColor='#bdbdbd' style={styles.button}>
            <Text>Lap</Text>
        </TouchableHighlight>
    }

    startStopButton() {
        var borderStyle = this.state.running ? styles.stopButton : styles.startButton;
        return <TouchableHighlight onPress={this.handleStartPress}
                underlayColor='#bdbdbd' style={[styles.button, borderStyle]}>
            <Text>{this.state.running ? 'Stop' : 'Start'}</Text>
        </TouchableHighlight>
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.timerWrapper}>
                <Text style={styles.timerText}>12:00.00</Text>
            </View>
            <View style={styles.buttonsWapper}>
                {this.lapButton()}
                {this.startStopButton()}
            </View>
            <View style={styles.footer}>
                {this.laps()}
            </View>
        </View>
    }

    handleStartPress() {
        
    }

    handleLapPress() {

    }

    laps() {
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    timerWrapper: {
        flex: 3,
        backgroundColor:'#aaa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsWapper: {
        flex: 2,
        backgroundColor:'#bbb',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    footer: {
        flex: 5,
        backgroundColor:'#ccc'
    },
    timerText: {
        fontSize: 64,
    },
    button: {
        borderWidth: 2,
        height: 120,
        width: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stopButton: {
        borderColor: 'red',
    },
    startButton: {
        borderColor: 'green',
    }
})

export default MyWatch