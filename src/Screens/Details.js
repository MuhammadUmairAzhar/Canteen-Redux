import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Colors } from '../assets/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AirbnbRating } from 'react-native-ratings';
import { useDispatch } from 'react-redux';
import CartActions from '../Redux/Actions/CartActions';
import CartIndicator from '../Components/CartIndicator';

const Details = ({ route, navigation }) => {

    const data = route?.params;
    const dispatch = useDispatch();
    console.log(data);


    const addToCart = () => {
        dispatch(CartActions.AddtoCart(data))
        Alert.alert(
            "Note",
            "Added to Cart",
            [
                { text: "OK", onPress: () => navigation.goBack() }
            ]
        );
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <MaterialIcons name='arrow-back' color={Colors.BLACK} size={25} onPress={() => navigation.goBack()} />
                <CartIndicator />
            </View>
            <ScrollView style={{ marginBottom: '1%' }}>
                <Text style={styles.heading}>{data?.title}</Text>
                <Image source={{ uri: data?.image }} style={styles.image} />
                <View style={styles.cartCard}>
                    <Text style={styles.textx}>
                        <Ionicons name='pricetags-outline' color={Colors.DGREEN} size={25} />  {data?.price} /-</Text>
                    <AirbnbRating
                        isDisabled={true}
                        count={5}
                        defaultRating={data?.rating?.rate}
                        size={18}
                        selectedColor={Colors.ORANGE}
                        unSelectedColor={Colors.GREY}
                        showRating={false}
                    />
                    <Text style={styles.text}> - {data?.category}</Text>
                    <Text style={styles.text}> - {data?.description}</Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.btn} onPress={addToCart}>
                <Text style={styles.btntxt}>ADD TO CART</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Details;

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
        width: '90%',
        elevation: 2,
        alignSelf: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.DGREEN,
        borderRadius: 5
    },
    input: {
        height: 50,
        borderRadius: 10,
        width: '85%',
        marginVertical: '8%',
        marginHorizontal: '8%',
        flexDirection: 'row',
        backgroundColor: Colors.LGREY,
        textAlign: 'center',
        elevation: 8
    },
    inputtxt: {
        fontSize: 18,
        padding: 6,
        marginLeft: 10
    },
    icon: {
        margin: 10
    },
    card: {
        width: '90%',
        height: 220,
        backgroundColor: Colors.LLGREEN,
        margin: '5%',
        elevation: 10,
        borderRadius: 20,
        alignSelf: 'center',
    },
    cardx: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        borderBottomEndRadius: 40,
        borderBottomRadius: 10,
        borderTopEndRadius: 20,
        backgroundColor: Colors.WHITE,
    },
    image: {
        resizeMode: 'contain',
        width: '50%',
        height: 250,
        margin: 20,
        alignSelf: 'center'
    },
    text: {
        color: Colors.BLACK,
        fontSize: 15,
    },
    textx: {
        color: Colors.BLACK,
        fontSize: 28,
        fontWeight: 'bold'
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
    mainContainer__one: {
        flex: 1
    },
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