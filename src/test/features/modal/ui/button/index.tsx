import { FunctionComponent } from "react";
import { Pressable, StyleSheet, Text} from "react-native";

interface ModalComponentButtonProps {
    text: string,
    onPress: () => void
}
 
const ModalComponentButton: FunctionComponent<ModalComponentButtonProps> = (props) => {
    const { text, onPress } = props;
    return (
        <Pressable
            style={styles.button} 
            onPress={() => onPress()} 
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#FFAF54',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 15
    },
    buttonText: {
        fontWeight: 600,
        fontSize: 16,
        color: '#fff'
    }
})
 
export default ModalComponentButton;