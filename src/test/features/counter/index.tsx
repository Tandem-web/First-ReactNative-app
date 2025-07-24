import { FunctionComponent, useState } from "react";
import { StyleSheet, Text, Vibration, View } from "react-native";
import CounterButton from "./ui/counter-button";

interface CounterProps {
    
}

const ONE_SECOND_IN_MS = 150;
const PATTERN = [
    ONE_SECOND_IN_MS,
    ONE_SECOND_IN_MS
];

const Counter: FunctionComponent<CounterProps> = () => {
    const [count, setCount] = useState(0)

    const countUp = () => {
        setCount(count+1);
        Vibration.vibrate(PATTERN, true)
        setTimeout(() => {
            Vibration.cancel()
        }, ONE_SECOND_IN_MS*PATTERN.length)
    }
    const countDown = () => {
        setCount(count-1);
        Vibration.vibrate(PATTERN, true)
        setTimeout(() => {
            Vibration.cancel()
        }, ONE_SECOND_IN_MS*PATTERN.length)
    }


    




    return (
        <>
            <View style={styles.counterContainer}>
                <Text style={styles.counterText}>{count}</Text>
                <View style={styles.buttonsContainer}>
                    <CounterButton text="+1" onPress={countUp}/>
                    <CounterButton text="-1" onPress={countDown}/>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    counterContainer: {
        gap: 10
    },
    counterText: {
        fontSize: 40,
        fontWeight: 600,
        color: '#fff',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 20
    }
})
export default Counter;