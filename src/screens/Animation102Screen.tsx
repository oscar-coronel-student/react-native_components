import { View, StyleSheet, Animated } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { Header } from '../components/Header';


export const Animation102Screen = () => {

    const { pan, panResponder } = useAnimation({})

    return (
        <>
            <Header />
            <View style={[ animation102Style.container ]}>
                <Animated.View
                    { ...panResponder.panHandlers }
                    style={[ pan.getLayout() ]}
                >
                    <View style={[ animation102Style.greenBox ]} />
                </Animated.View>
            </View>
        </>
    )
}

const animation102Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    greenBox: {
        backgroundColor: 'green',
        borderRadius: 12,
        width: 150,
        height: 150
    }
})