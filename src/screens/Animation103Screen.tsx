import { View, StyleSheet, Text } from 'react-native';

import { Header } from '../components/Header';
import { CustomSwitch } from '../components/CustomSwitch';
import { useState } from 'react';
import { animation103Style } from '../theme/appTheme';


export const Animation103Screen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    const setSwitchValue = (value: boolean, field: keyof typeof state) => setState({ ...state, [field]: value })

    return (
        <>
            <Header />
            <View style={[ animation103Style.container ]}>
                <View style={[ animation103Style.switchContent ]}>
                    <View style={[ animation103Style.switchRow ]}>
                        <Text style={[ animation103Style.switchText ]}>¿Está Activo?</Text>
                        <CustomSwitch
                            onValueChanged={ (value) => setSwitchValue(value, 'isActive') }
                            isOn={ state.isActive }
                        />
                    </View>
                    <View style={[ animation103Style.switchRow ]}>
                        <Text style={[ animation103Style.switchText ]}>¿Está Hambriento?</Text>
                        <CustomSwitch
                            onValueChanged={ (value) => setSwitchValue(value, 'isHungry') }
                            isOn={ state.isHungry }
                        />
                    </View>
                    <View style={[ animation103Style.switchRow ]}>
                        <Text style={[ animation103Style.switchText ]}>¿Está Feliz?</Text>
                        <CustomSwitch
                            onValueChanged={ (value) => setSwitchValue(value, 'isHappy') }
                            isOn={ state.isHappy }
                        />
                    </View>

                </View>
                <View>
                    <Text style={{ fontSize: 18, marginLeft: 15, marginTop: 10 }}>
                        {
                            JSON.stringify(state, null, 3)
                        }
                    </Text>
                </View> 
            </View>
        </>
    )
}