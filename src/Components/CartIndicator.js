import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../assets/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function CartIndicator() {

    const CARTITEMS = useSelector(state => state.CartReducer);
    console.log('-------------', CARTITEMS);
    const Navigation = useNavigation();
    return (

        <View style={styles.cartIndicator} >
            <Ionicons name='cart' color={Colors.WHITE} size={25} onPress={() => Navigation.navigate('Cart')} />
            <Text style={styles.icontxt}>
                {CARTITEMS.length} </Text>
        </View>

    );
}

const styles = StyleSheet.create({

    icontxt: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold'
    },
    cartIndicator: {
        backgroundColor: Colors.DGREEN,
        flexDirection: 'row',
        width: 65,
        borderRadius: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }

})