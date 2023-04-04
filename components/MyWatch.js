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
                <Text style={styles.timerText}>
                    {formatTime(this.state.timeElapsed)}
                </Text>
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
        if (this.state.running) {
            clearInterval(this.interval)
            this.setState({running: false})
            return
        }
        this.setState({
            startTime: new Date(),
            running: true,
        })
        this.interval = setInterval(() => {
            this.setState({timeElapsed: new Date - this.state.startTime})
        }, 30)
    }

    handleLapPress() {
        this.setState({
            startTime: new Date(),
            laps: this.state.laps.concat(this.state.timeElapsed)
        })
    }

    laps() {
        return this.state.laps.map((lapTime, index) => {
            return <View key={index} style={styles.lap}>
                <Text style={styles.lapText}>Lap #{index + 1}</Text>
                <Text style={styles.lapText}>{formatTime(lapTime)}</Text>
            </View>
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    timerWrapper: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsWapper: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    lap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    footer: {
        flex: 5,
    },
    timerText: {
        fontSize: 64,
    },
    lapText: {
        fontSize: 30,
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