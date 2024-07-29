import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header } from '../components/Header';
import { animation103Style, textInputStyle } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { TextInputForm } from '../interfaces/general';
import { CustomSwitch } from '../components/CustomSwitch';


export const TextInputScreen = () => {

    const { formState, handleChange } = useForm<TextInputForm>({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    const { name, email, phone, isSubscribed } = formState;

    return (
        <>
            <KeyboardAvoidingView 
                style={{ flex: 1 }}
                behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
            >
                <ScrollView>
                    <TouchableWithoutFeedback
                        onPress={ Keyboard.dismiss }
                    >
                        <>
                            <Header />
                            <View style={[ textInputStyle.container ]}>
                                <TextInput 
                                    keyboardType='default'
                                    placeholder='Nombre'
                                    value={ name }
                                    onChangeText={( value ) => handleChange('name', value) }
                                    style={[ textInputStyle.textInput ]}
                                    autoFocus
                                    autoCorrect={ false }
                                    autoCapitalize='words'
                                    keyboardAppearance='dark'
                                />
                                <TextInput 
                                    keyboardType='email-address'
                                    placeholder='Correo'
                                    value={ email }
                                    onChangeText={( value ) => handleChange('email', value) }
                                    style={[ textInputStyle.textInput ]}
                                    autoCapitalize='none'
                                />
                                <View style={[ animation103Style.switchRow ]}>
                                    <Text style={[ animation103Style.switchText ]}>Suscribirme</Text>
                                    <CustomSwitch
                                        onValueChanged={ (value) => handleChange('isSubscribed', value) }
                                        isOn={ isSubscribed }
                                    />
                                </View>
                                

                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
                                    { JSON.stringify( formState, null, 3 ) }
                                </Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
                                    { JSON.stringify( formState, null, 3 ) }
                                </Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
                                    { JSON.stringify( formState, null, 3 ) }
                                </Text>

                                <TextInput 
                                    keyboardType='phone-pad'
                                    placeholder='Teléfono'
                                    value={ phone }
                                    onChangeText={( value ) => handleChange('phone', value) }
                                    style={[ textInputStyle.textInput ]}
                                />

                            </View>
                        </>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}