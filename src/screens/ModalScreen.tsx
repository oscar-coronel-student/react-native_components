import { Button, Modal, StyleSheet, Text, View } from 'react-native';

import { Header } from '../components/Header';
import { useState } from 'react';


export const ModalScreen = () => {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    return (
        <>
            <Header />
            <View style={[ styles.btnContent ]}>
                <Button 
                    title='Abrir Modal'
                    onPress={ () => setIsModalVisible(true) }
                />
            </View>

            <Modal
                animationType='fade'
                visible={ isModalVisible }
                transparent
            >
                <View style={[ styles.modal ]}>
                    <View style={[ styles.modalContent ]}>
                        <Text style={[ styles.modalTitle ]}>Título de Modal</Text>
                        <Text style={[ styles.modalBodyText ]}>Cuerpo del Modal</Text>
                        <View style={[ styles.closeButton ]}>
                            <Button
                                title='Cerrar'
                                onPress={ () => setIsModalVisible(false) }
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    btnContent: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center'
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: 300,
        height: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'green',
        elevation: 10,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 10
        }
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    modalBodyText: {
    },
    closeButton: {
        marginTop: 15
    }
})