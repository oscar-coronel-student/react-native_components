import { Text, View } from "react-native";
import { styles } from "../theme/appTheme";


export const FlatListMenuHeader = () => {
    return (
        <View style={{ marginBottom: 15 }}>
            <Text style={ styles.title }>Opciones del menu</Text>
        </View>
    )
}