import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../assets/Colors';

export default function Thankyou({ navigation }) {
    return (
        <ScrollView style={style.container}>
            <View style={style.iconView}>
                <Ionicons name='md-checkmark-done-circle' color={Colors.LLLGREEN} size={170} />
                <Text style={[style.text, { fontSize: 28, fontWeight: 'bold', color: Colors.DGREEN }]}>Thank You !</Text>
                <Text style={style.text}>Your Order has been placed successfully </Text>
                <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Home')} >
                    <Text style={style.btntxt}>Continue Shopping</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    iconView: {
        alignSelf: 'center',
        marginVertical: '40%',
        alignItems: 'center',
    },
    text: {
        fontSize: 18
    },
    btn: {
        backgroundColor: Colors.LLLGREEN,
        height: 45,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 80
    },
    btntxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
})