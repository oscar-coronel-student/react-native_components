import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { appDefaultStyle } from '../theme/appTheme'


export const Header = () => {

    const { top } = useSafeAreaInsets();
    const navigation: NavigationProp<any> = useNavigation()
    const route: RouteProp<any> = useRoute()

    const { itemName } = route.params as any

    return (
        <View style={{ top, ...styles.content }}>
            <TouchableOpacity
                style={[ styles.goBack ]}
                onPress={ () => {
                    navigation.goBack();
                }}
            >
                <Icon name='chevron-left' size={15} color="white" />
            </TouchableOpacity>
            <Text style={[ styles.text ]}>
                {
                    itemName       
                }
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    content: {
        height: 45,
        backgroundColor: appDefaultStyle.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    goBack: {
        width: 25,
        height: 25,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    }
})