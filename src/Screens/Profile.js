import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Colors } from '../assets/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Modaal } from '../Components/Modal';
import { useDispatch } from 'react-redux';
import AuthActions from '../Redux/Actions/AuthActions';


export default function Profile({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();

    const Logout = () => {
        dispatch(AuthActions.Logout())
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
            <View style={styles.view1}></View>
            <View style={styles.view2}></View>
            <View style={styles.view3}></View>
            <ScrollView>
                <Modaal
                    modalVisible={modalVisible}
                    functionModal={Logout}
                    cancelModal={cancelModal}
                    closeModalText={"Cancel"}
                    modalText={"Are you sure to logout ?"}
                    functionModalText={"Yes"}
                />
                <Image source={require('../assets/Images/man.jpg')} style={styles.img} />
                <View style={styles.textView}>
                    <Text style={styles.text}>Name :</Text>
                    <Text style={styles.textx}>David Smith</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>Email :</Text>
                    <Text style={styles.textx}>david@gmail.com</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={openModal}  >
                    <MaterialIcons name='logout' color={Colors.WHITE} size={25} />
                    <Text style={styles.btntxt}>  Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    view1: {
        backgroundColor: Colors.LLGREEN,
        width: '40%',
        height: 140,
        position: 'absolute',
        left: '58%',
        top: '10%',
        borderRadius: 100,
    },
    view2: {
        backgroundColor: Colors.LLGREEN,
        width: '30%',
        height: 100,
        position: 'absolute',
        left: '55%',
        top: '32%',
        borderRadius: 90,
    },
    view3: {
        backgroundColor: Colors.LLGREEN,
        width: '30%', height: 100,
        position: 'absolute',
        left: '5%',
        top: '80%',
        borderRadius: 90,
    },
    textView: {
        marginHorizontal: 20,
        padding: 10
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
    img: {
        width: '40%',
        height: 145,
        borderRadius: 80,
        borderColor: 'black',
        borderWidth: 1,
        margin: 15
    },
    text: {
        color: Colors.BLACK,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textx: {
        color: Colors.BLACK,
        fontSize: 18,
        marginLeft: 5
    },
    btn: {
        backgroundColor: '#9932CC',
        height: 40,
        width: '30%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: '30%',
        marginHorizontal: '10%',
        padding: 5
    },
    btntxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
})