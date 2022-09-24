import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../assets/Colors';

export const Modaal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props?.modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{props?.modalText}</Text>
                    <View style={styles.btnview}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={props?.cancelModal}
                        >
                            <Text style={styles.textStyle}>{props?.closeModalText}</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={props?.functionModal}
                        >
                            <Text style={styles.textStyle}>{props?.functionModalText}</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.GREY,
        opacity: 0.9
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        width: 80,
        elevation: 2,
        margin: 5
    },
    buttonOpen: {
        backgroundColor: Colors.LLGREEN,
    },
    buttonClose: {
        backgroundColor: Colors.DGREEN,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
        color: Colors.BLACK,
        textAlign: "center"
    },
    btnview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    }
});
