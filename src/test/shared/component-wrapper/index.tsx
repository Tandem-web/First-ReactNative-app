import {FunctionComponent, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface ComponentWrapperProps {
    sectionName?: string,
    children: ReactNode
}
 
const ComponentWrapper: FunctionComponent<ComponentWrapperProps> = (props) => {
    const {sectionName, children} = props;

    return (
        <View style={styles.componentWrapper}>
            <Text style={styles.sectionName}>{sectionName}</Text>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    componentWrapper: {
        padding: 25,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#D3679C',
        borderRadius: 20,
        position: 'relative'
    },
    sectionName: {
        color: '#fff',
        fontSize: 16,
        position: 'absolute',
        top: 10,
        right: 15
    }
})

export default ComponentWrapper;