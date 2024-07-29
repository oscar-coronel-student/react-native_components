import { View, StyleSheet, Alert, Button } from 'react-native';
import prompt from 'react-native-prompt-android';

import { Header } from '../components/Header';


export const Animation104Screen = () => {


    const showAlert = () => {
        Alert.alert('Título', 'Este es el cuerpo de la alerta', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
            { text: 'Ok 2', onPress: () => console.log('OK Pressed') },
        ], {
            cancelable: true,
            onDismiss: () => console.log('on dismiss'),
        });
    }

    const showPrompt = () => {
        console.log('show prompt');
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <>
            <Header />
            <View style={[ animation104Style.container ]}>
                <View style={{ marginTop: 20 }}>
                    <Button 
                        title='Mostrar Alerta'
                        onPress={ showAlert }
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button 
                        title='Mostrar Prompt'
                        onPress={ showPrompt }
                    />
                </View>
            </View>
        </>
    )
}

const animation104Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10
    }
})