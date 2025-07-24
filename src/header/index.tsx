import { FunctionComponent } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

interface AppHeaderProps {
    
}
 
const AppHeader: FunctionComponent<AppHeaderProps> = () => {
    const statusBarHeight = StatusBar.currentHeight || 0;
    
    return (
        <>
            <View style={[style.headerContainer, { top: statusBarHeight}]}>
                <View>
                    <Image style={style.headerLogo}
                        source={require("../../assets/header/logo.png")}
                    />
                </View>
                <View style={style.textContainer}>
                    <Text style={style.headerTitle}>Header</Text> 
                </View>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    headerContainer: {
        padding: 10,
        height: 80,
        backgroundColor: '#362C3B',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        left: 0, 
        zIndex: 100,
    },
    headerLogo: {
        width: 60,
        height: 60
    },
    textContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        boxSizing: 'border-box'
    },
    headerTitle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    }
})
 
export default AppHeader;