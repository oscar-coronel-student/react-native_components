import { Button, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, Text, useWindowDimensions, View } from "react-native"
import { Header } from "../components/Header"
import { colors } from '../theme/appTheme';
import { FlatList } from "react-native-gesture-handler";
import { useRef, useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/images/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/images/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/images/slide-3.png'),
    },
];


export const SlideScreen = () => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const flatListRef = useRef<FlatList|null>(null);
    const navigate = useNavigation<NavigationProp<any>>();

    const onScroll = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = ev.nativeEvent;
        const currentIndex: number = Math.floor( contentOffset.x / layoutMeasurement.width );

        setCurrentSlideIndex(currentIndex);
    }

    const scrollToSlide = (index: number) => {
        flatListRef.current?.scrollToIndex({
            index,
            animated: true,
        });
    }

    return <>
        <Header />
        <View style={{
            flex: 1,
            backgroundColor: colors.background
        }}>
            
            <FlatList
                ref={flatListRef}
                data={items}
                keyExtractor={ (item, index) => `${ item.title }` }
                renderItem={ ({ item }) => <SlideItem item={ item } /> }
                horizontal
                showsHorizontalScrollIndicator={ false }

                pagingEnabled
                decelerationRate='fast'

                // scrollEnabled={ false }
                onScroll={onScroll}

            />

            {
                currentSlideIndex < items.length - 1 
                ? <View style={{
                    position: 'absolute',
                    bottom: 60,
                    right: 30,
                    width: 100,
                }}>
                    <Button
                        title="Siguiente"
                        onPress={() => {
                            scrollToSlide(currentSlideIndex + 1)
                        }}
                    />
                </View>
                : <View style={{
                    position: 'absolute',
                    bottom: 60,
                    right: 30,
                    width: 100,
                }}>
                    <Button
                        title="Finalizar"
                        onPress={() => {
                            navigate.goBack();
                        }}
                    />
                </View>
            }
        </View>
    </>
}

interface SlideItemProps {
    item: Slide
}

const SlideItem = ({ item }: SlideItemProps) => {

    const { width } = useWindowDimensions();

    return <View style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
        width
    }}>
        <Image
            source={ item.img }
            style={{
                width: width * 0.7,
                height: width * 0.7,
                resizeMode: 'center',
                alignSelf: 'center'
            }}
        />

        <Text style={{
            color: colors.primary,
            fontSize: 20
        }}>{ item.title }</Text>

        <Text style={{
            color: colors.text
        }}>
            { item.desc }
        </Text>

    </View>
}