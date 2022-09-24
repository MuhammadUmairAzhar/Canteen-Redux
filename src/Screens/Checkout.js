import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Colors } from '../assets/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { Modaal } from '../Components/Modal';
import CartActions from '../Redux/Actions/CartActions';

export const Checkout = ({ navigation }) => {

    // const data = route?.params;
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [total, settotal] = useState();
    const CARTITEMS = useSelector(state => state.CartReducer)
    // console.log('+++++++++++++++++++++++', CARTITEMS);

    useEffect(() => {
        settotal(CARTITEMS.reduce((acc, curr) => acc + Number(curr.subTotal), 0))
    }, []);

    const orderNow = () => {
        openModal();
        dispatch(CartActions.clear())
    }

    const cancelModal = () => {
        setModalVisible(false)
    }
    const openModal = () => {
        setModalVisible(true)
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <MaterialIcons name='arrow-back' color={Colors.BLACK} size={25} onPress={() => navigation.goBack()} />
            </View>
            <ScrollView style={{ marginBottom: '10%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.heading}>Total :</Text>
                    <Text style={styles.heading}>{total} /-</Text>
                </View>

                <View style={styles.cartCard}>
                    <Text style={styles.textx}>
                        <Ionicons name='receipt' color={Colors.DGREEN} size={20} /> {"Receipt"} </Text>
                    <View style={styles.itemLine}>
                        <Text style={styles.texthead}>  Item</Text>
                        <Text style={styles.texthead}>  Quantity</Text>
                        <Text style={styles.texthead}>  Sub-total</Text>
                    </View>
                    <FlatList
                        style={{ marginTop: 7 }}
                        data={CARTITEMS}
                        keyExtractor={id => id?.id}
                        renderItem={({ item, index }) => {
                            console.log('oooooooo', item);
                            return (
                                <View style={[styles.itemLine, { borderWidth: 1, borderColor: Colors.BLACK, margin: 5 }]}>
                                    <Text style={styles.text}>  {item?.category}</Text>
                                    <Text style={styles.text}>  {item?.quantity}</Text>
                                    <Text style={styles.text}>  {item?.subTotal ? item?.subTotal : item?.price}</Text>
                                </View>
                            );
                        }}
                        ListEmptyComponent={
                            <Text style={styles.No_Data_Found_Text}>No items</Text>
                        }
                    />
                </View>


            </ScrollView>
            <Modaal
                modalVisible={modalVisible}
                functionModal={() => navigation.navigate('Thankyou')}
                cancelModal={cancelModal}
                closeModalText={"NO"}
                modalText={"Are you sure to place order ?"}
                functionModalText={"YES"}
            />

            <TouchableOpacity style={styles.btn} disabled={CARTITEMS.length == 0 ? true : null} onPress={orderNow} >
                <Text style={styles.btntxt}>ORDER NOW</Text>
            </TouchableOpacity>


        </View>
    )
}



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
        fontSize: 22,
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
        borderRadius: 5,
        margin: 15,
        borderRadius: 10
    },
    itemLine: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignSelf: 'center'
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
        marginVertical: 5,
        width: '30%',
        alignSelf: 'center',

    },
    textx: {
        color: Colors.BLACK,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '10%'
    },
    texthead: {
        color: Colors.BLACK,
        fontSize: 15,
        fontWeight: 'bold',
        width: '30%',
        alignSelf: 'center'
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
    },
    No_Data_Found_Text: {
        flex: 1,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }

})