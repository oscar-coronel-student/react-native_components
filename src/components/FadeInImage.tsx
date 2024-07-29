import { ActivityIndicator, Animated, Dimensions, ImageStyle, View, ViewStyle } from "react-native"
import { useAnimation } from "../hooks/useAnimation"
import { useState } from "react"


interface Props {
    uri: string
    fadeDuration?: number
    contentStyle?: ViewStyle
    imageStyle?: ImageStyle
    width?: number
    height?: number
}

const { width: screenW } = Dimensions.get('window');

export const FadeInImage = ({ uri, fadeDuration = 1000, contentStyle = {}, imageStyle = {}, height = 350, width = screenW }: Props) => {

    
    const { onFadeIn, opacity } = useAnimation({
        fadeDuration: fadeDuration
    });

    const [isLoading, setIsLoading] = useState(true);

    return <>
        <View style={[{width, height, justifyContent: 'center', alignItems: 'center'}, contentStyle]}>
            {
                isLoading 
                && <>
                    <ActivityIndicator size={ 35 } color={'gray'} />
                </>
            }
            <Animated.Image
                onLoadEnd={ () => {
                    setIsLoading(false);
                    onFadeIn();
                }}
                style={{
                    opacity,
                    ...imageStyle,
                    width,
                    height,
                    display: isLoading ? 'none' : 'flex'
                }}
                source={{
                    uri
                }}
            />
        </View>
    </>
}