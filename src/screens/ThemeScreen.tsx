import { Button, StyleSheet, Text, View } from "react-native"
import { Header } from "../components/Header"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";



export const ThemeScreen = () => {

    const { setTheme, currentTheme, colors } = useContext( ThemeContext );

    return <View style={[ styles.content ]}>
        <View style={[ styles.header ]}>
            <Text style={[ styles.header_title, { color: colors.text } ]}>
                Cambiar Tema: { currentTheme }
            </Text>
        </View>

        <View>
            <Button
                title="Light"
                onPress={() => {
                    setTheme('light');
                }}
            />

            <View style={{ height: 10 }} />

            <Button
                title="Dark"
                onPress={() => { 
                    setTheme('dark');
                }}
            />
        </View>
    </View>
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 10
    },
    header: {
        paddingBottom: 10
    },
    header_title: {
        fontSize: 20,
        color: 'black'
    }
});