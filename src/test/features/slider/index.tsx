import React, { FunctionComponent, useEffect } from "react";
import { Animated, Image, ImageSourcePropType, SafeAreaView, ScrollView, StyleSheet, useAnimatedValue, useWindowDimensions, View } from "react-native";

interface MySliderProps {
    
}

const images:ImageSourcePropType [] = [
    require('../../../../assets/slider/01.jpg'),
    require('../../../../assets/slider/02.jpg'),
    require('../../../../assets/slider/03.jpg'),
    require('../../../../assets/slider/04.jpg'),
    require('../../../../assets/slider/05.jpg')
]


const MySlider: FunctionComponent<MySliderProps> = () => {
    const scrollX = useAnimatedValue(0);

    const {width: windowWidth} = useWindowDimensions();


    const ScrollHandler = Animated.event([
        {
            nativeEvent: {
                contentOffset: {
                x: scrollX,
                },
            },
        },
    ])

    useEffect(() => {
        console.log(scrollX) 
    }, [scrollX])

    return (
        <>
            <SafeAreaView style={styles.sliderContainer}>
                <View style={styles.sliderContainer}>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        onScroll={ScrollHandler}
                        scrollEventThrottle={1}
                        style={styles.scrollView}
                    >
                        {
                            images.map((image, id) => (
                                <View
                                    style={[styles.cardContainer, {width: windowWidth-74}]}
                                    key={`my-slider-image-${id}`}    
                                >
                                    <Image 
                                        style={styles.cardImage}
                                        source={image}
                                    />
                                </View>
                            ))
                        }
                    </ScrollView>
                    <View style={styles.indicatorContainer}>
                        {
                            images.map((image, id) => {
                                const width = scrollX.interpolate({
                                    inputRange: [
                                        windowWidth * (id - 1),
                                        windowWidth * id,
                                        windowWidth * (id + 1),
                                    ],
                                    outputRange: [8, 16, 8],
                                    extrapolate: 'clamp',
                                });
                                return(
                                    <Animated.View
                                        key={`my-slider-dot-${id}`}
                                        style={[styles.normalDot, {width}]}
                                    />
                                )
                            })
                        }
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        marginTop: 20,
        height: 220,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContainer: {
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardContainer: {
        overflow: 'hidden',
        height: 200,
        paddingHorizontal: 15,
        paddingVertical: 4,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#FFAF54',
        marginHorizontal: 4,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default MySlider;