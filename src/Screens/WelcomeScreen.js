import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Colors } from '../assets/Colors';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/Images/plant.jpg')}>
                <Text style={styles.text}>Welcome to Practice</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btntxt}>Get Started</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 60,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: '130%'
    },
    btn: {
        backgroundColor: Colors.LLLGREEN,
        height: 60,
        width: '60%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btntxt: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.WHITE
    }

})