import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Colors } from '../assets/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import CartActions from '../Redux/Actions/CartActions';

const Cart = ({ navigation }) => {

    const CARTITEMS = useSelector(state => state.CartReducer)
    console.log('Shopping Cart Itemssssss', CARTITEMS);
    const dispatch = useDispatch();


    const removeItem = (id) => {
        dispatch(CartActions.removeFromCart(id))
    }

    const increment = (id) => {
        dispatch(CartActions.increment(id))
    }

    const decrement = (id) => {
        dispatch(CartActions.decrement(id))
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <MaterialIcons name='arrow-back' color={Colors.BLACK} size={25} onPress={() => navigation.goBack()} />
                <View style={styles.cartIndicator}>
                    <Text style={styles.icontxt}> Shopping Cart </Text>
                </View>
            </View>

            <FlatList
                style={{ marginTop: 7 }}
                data={CARTITEMS}
                keyExtractor={id => id?.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.cartCard}>
                            <Image source={{ uri: item?.image }} style={styles.image} />
                            <View>
                                <Text style={styles.text}>{item?.category} </Text>
                                <Text style={styles.text}> $ {item?.price}</Text>
                                <Text style={[styles.text, { fontSize: 14 }]}>SubTotal : {(item?.price * item?.quantity).toFixed(2)} </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                {item?.quantity <= 0 ? <FontAwesome name='minus-circle' color={Colors.LGREY} size={25} />
                                    :
                                    <FontAwesome name='minus-circle' color={Colors.DGREEN} size={25} onPress={() => decrement(item.id)} />
                                }
                                <Text style={styles.text}> {item?.quantity <= 0 ? null : item?.quantity} </Text>
                                <FontAwesome name='plus-circle' color={Colors.DGREEN} size={25} onPress={() => increment(item.id)} />
                            </View>
                            <TouchableOpacity onPress={() => removeItem(index)} >
                                <FontAwesome name='trash' color={Colors.RED} size={23} />
                            </TouchableOpacity>
                        </View>
                    );
                }}
                ListEmptyComponent={
                    <Text style={styles.No_Data_Found_Text}>Shopping Cart is empty</Text>
                }
            />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Checkout')}>
                <Text style={styles.btntxt}>CHECKOUT</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    header: {
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 25,
        color: Colors.DGREEN,
        fontWeight: 'bold',
        marginHorizontal: '5%'
    },
    cartCard: {
        backgroundColor: Colors.WHITE,
        width: '95%',
        elevation: 10,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },

    card: {
        width: '90%',
        height: 220,
        backgroundColor: Colors.LLGREEN,
        margin: '5%',
        elevation: 2,
        borderRadius: 20,
        alignSelf: 'center',
    },
    image: {
        width: '20%',
        height: 50,
        resizeMode: 'contain'
    },
    text: {
        color: Colors.BLACK,
        fontSize: 17,
        margin: 2
    },

    btn: {
        backgroundColor: Colors.DGREEN,
        height: 60,
        width: '70%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 5
    },
    btntxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.WHITE
    },

    icontxt: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold'
    },
    cartIndicator: {
        backgroundColor: Colors.DGREEN,
        flexDirection: 'row',
        width: '50%',
        padding: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    No_Data_Found_Text: {
        flex: 1,
        alignSelf: 'center',
        marginVertical: '30%',
        fontWeight: 'bold',
        fontSize: 18
    }

})