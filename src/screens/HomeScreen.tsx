import { View, FlatList } from 'react-native'

import { homeStyles } from '../theme/appTheme'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { FlatListMenuHeader } from '../components/FlatListMenuHeader'
import { FlatListMenuSeparator } from '../components/FlatListMenuSeparator'
import { menuItems } from '../data/menuItems'


export const HomeScreen = () => {

    return (
        <View style={ homeStyles.container }>
            <FlatList 
                data={menuItems}
                renderItem={ ({ item }) => <FlatListMenuItem item={ item } /> }
                keyExtractor={ (element) => String(element.id) }
                ListHeaderComponent={ FlatListMenuHeader }
                ItemSeparatorComponent={ FlatListMenuSeparator }
            />
        </View>
    )
}