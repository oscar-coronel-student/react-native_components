import { View, StyleSheet, Animated, Button } from 'react-native'

import { useAnimation } from '../hooks/useAnimation'
import { Header } from '../components/Header';


export const Animation101Screen = () => {

    const { opacity, position, onFadeIn, onFadeOut, onStartMoving } = useAnimation({});

    return (
        <>
            <Header />
            <View style={[ animation101Style.container ]}>
                <Animated.View style={{ 
                    opacity, 
                    transform: [
                        { translateX: position }
                    ]
                }}>
                    <View style={[ animation101Style.purpleBox ]} />
                </Animated.View>
                <View style={{ flexDirection: 'row', marginTop: 25 }}>
                    <Button 
                        title='Mostrar'
                        onPress={ () => {
                            onFadeIn();
                            onStartMoving(-300);
                        }}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Button 
                            title='Ocultar'
                            onPress={ () => {
                                onFadeOut();
                            }}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}

const animation101Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
})