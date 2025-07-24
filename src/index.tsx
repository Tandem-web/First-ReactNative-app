import { FunctionComponent } from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import AppHeader from "./header";
import AppTestComponents from "./test";

interface MyAppProps {
    
}
 
const MyApp: FunctionComponent<MyAppProps> = () => {
    const statusBarHeight = StatusBar.currentHeight || 0;
    return (
        <>
            <AppHeader/>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={[styles.scrollContainer, { marginBottom: statusBarHeight + 20}]}
            >
                <AppTestComponents/>
            </ScrollView>
        </>
    );
}
 
const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#191622',
        marginTop: 80,
        boxSizing: 'content-box',
        position: 'relative',
    }
})
export default MyApp;