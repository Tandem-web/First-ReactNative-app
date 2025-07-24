import { FunctionComponent, useReducer} from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import ModalComponentButton from "./ui/button";

interface MyModalProps {
    
}

interface ModalState {
    modalVisible: boolean;
}

const ModalAction = {
    OPEN: 'open',
    CLOSE: 'close',
    TOGGLE: 'toggle'
} as const;
type ModalAction = typeof ModalAction[keyof typeof ModalAction];

interface ModalReducer {
    type: ModalAction
}
const initialState: ModalState = {
    modalVisible: true,
};


const modalReducer = (state: ModalState, action: ModalReducer): ModalState => {
    switch (action.type) {
        case 'open':
            return { ...state, modalVisible: true };
        case 'close':
            return { ...state, modalVisible: false };
        case 'toggle':
            return { ...state, modalVisible: !state.modalVisible };
        default:
            return state;
    }
};


const MyModal: FunctionComponent<MyModalProps> = () => {
     const [state, dispatch] = useReducer(modalReducer, initialState);
    
    const openModal = () => dispatch({ type: ModalAction.OPEN });
    const closeModal = () => dispatch({ type: ModalAction.CLOSE });
    const toggleModal = () => dispatch({ type: ModalAction.TOGGLE });

    console.log(state.modalVisible)
    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={state.modalVisible} 
                onRequestClose={() => toggleModal()}
            >
                <View style={styles.centred}>
                    <View style={styles.modalWrapper}>
                        <Text style={styles.modalText}>Это модальное окно</Text>
                        <ModalComponentButton text="Закрыть модальное окно" onPress={closeModal}/>
                    </View>
                </View>
            </Modal>
            <ModalComponentButton text="Показать модальное окно" onPress={openModal}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }, 
    centred: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalWrapper: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

})

export default MyModal;