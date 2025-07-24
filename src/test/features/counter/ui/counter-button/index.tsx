import { FunctionComponent } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface CounterButtonProps {
    text: string;
    onPress: () => void;
}
 
const CounterButton: FunctionComponent<CounterButtonProps> = (props) => {
    const { text, onPress} = props
    return (
        <Pressable style={styles.button} onPress={() => onPress()}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 25,
        padding: 5,
        boxSizing: 'content-box',
        backgroundColor: '#FFAF54',
        borderRadius: 15
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default CounterButton;