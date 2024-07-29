import { ListRenderItemInfo, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'

import { appDefaultStyle, homeStyles } from "../theme/appTheme"
import { ExampleData } from '../interfaces/general'
import { NavigationProp, useNavigation } from "@react-navigation/native"


interface Props {
    item: ExampleData
}

export const FlatListMenuItem = ({ item }: Props) => {

    const navigation: NavigationProp<any> = useNavigation();

    return <>
        <TouchableOpacity
            activeOpacity={ 0.6 }
            onPress={ () => navigation.navigate( item.component, { itemName: item.name } ) }
        >
            <View style={ homeStyles.itemContainer }>
                <View style={ homeStyles.itemContainerBody1 }>
                    <View style={{ width: 35 }}>
                        <Icon name={ item.icon } size={23} color={ appDefaultStyle.primary } />
                    </View>
                    <Text style={ homeStyles.itemText }>
                        {
                            item.name
                        }
                    </Text>
                </View>
                <View style={ homeStyles.itemContainerBody2 }>
                    <Icon name='chevron-right' size={20} color={ appDefaultStyle.primary } />
                </View>
            </View>
        </TouchableOpacity>
    </>
}