import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import ComponentWrapper from "./shared/component-wrapper";
import Counter from "./features/counter";

interface AppTestComponentsProps {
    
}
 
const AppTestComponents: FunctionComponent<AppTestComponentsProps> = () => {
    return (
        <View style={styles.container}>
            <ComponentWrapper sectionName='1. Счётчик'>
                <Counter/>
            </ComponentWrapper>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        gap: 20,
    }
})
export default AppTestComponents;