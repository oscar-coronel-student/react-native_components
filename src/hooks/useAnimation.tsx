import { useRef } from 'react'
import { Animated, Easing, PanResponder } from 'react-native'


interface Props {
    initFade?: 0|1
    fadeDuration?: number
}

export const useAnimation = ({ initFade = 0, fadeDuration = 1500 }: Props) => {
    const opacity = useRef( new Animated.Value(initFade) ).current
    const position = useRef( new Animated.Value(0) ).current
    const pan = useRef( new Animated.ValueXY() ).current

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                {
                    dx: pan.x,
                    dy: pan.y,
                }
            ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: () => {
            Animated.spring(
                pan,
                {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                }
            ).start()
        }
    })

    const onFade = (toValue: 0|1, callbackEnd?: Animated.EndCallback) => {
        Animated.timing(
            opacity,
            {
                useNativeDriver: true,
                toValue,
                duration: fadeDuration
            }
        ).start(callbackEnd)
    }

    const onStartMoving = (initPosition: number) => {
        position.setValue(initPosition);
        Animated.timing(
            position,
            {
                useNativeDriver: true,
                duration: 1500,
                toValue: 0,
                easing: Easing.bounce
            }
        ).start()
    }

    const onFadeIn = () => onFade(1)
    const onFadeOut = () => onFade(0)

    return {
        pan,
        opacity,
        position,
        onFadeIn,
        onFadeOut,
        onStartMoving,
        panResponder
    }
}
