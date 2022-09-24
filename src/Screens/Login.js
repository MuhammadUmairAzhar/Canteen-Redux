import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from "react-redux";
import { Colors } from "../assets/Colors";
import AuthActions from "../Redux/Actions/AuthActions";

export default function Login({ navigation }) {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [name, setname] = useState('');
    const dispatch = useDispatch();

    const Login = () => {
        if (!name || !password) {
            alert('Please fill all feilds !')
        } else {
            dispatch(AuthActions.Login(name, password))
        }
    }
    return (

        <View style={styles.container}>
            <View style={styles.Upper}></View>
            <Text style={styles.heading}>Login</Text>
            <View style={styles.inputs}>
                <View style={styles.inp1}>
                    <FontAwesome5 name='user' size={20} color={Colors.BLACK} solid style={styles.icon} />
                    <TextInput placeholder="Enter name" style={styles.inputtxt}
                        value={name}
                        onChangeText={(e) => setname(e)} />
                </View>
                <View style={styles.inp1}>
                    <FontAwesome5 name='envelope' size={20} color={Colors.BLACK} solid style={styles.icon} />
                    <TextInput placeholder="Enter email" style={styles.inputtxt}
                        value={email}
                        onChangeText={(e) => setemail(e)} />
                </View>
                <View style={styles.inp1}>
                    <FontAwesome5 name='lock' size={20} color={Colors.BLACK} solid style={styles.icon} />
                    <TextInput placeholder="Enter password" style={styles.inputtxt}
                        value={password}
                        onChangeText={(e) => setpassword(e)} />
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: '10%' }}>
                <TouchableOpacity style={styles.btn} onPress={Login} >
                    <Text style={styles.btntxt}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={styles.txt}>Don't have an account ? SIGN UP</Text>
            </View>
            <View style={styles.Lower}></View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    inputs: {
        alignItems: 'center',
    },
    Upper: {
        backgroundColor: Colors.LLLGREEN,
        width: '40%',
        height: 110,
        borderBottomEndRadius: 100,
    },
    Lower: {
        backgroundColor: Colors.LLLGREEN,
        width: '40%',
        height: 110,
        // position: 'absolute',
        // bottom: 0,
        alignSelf: 'flex-end',
        borderTopLeftRadius: 100
    },
    heading: {
        fontSize: 35,
        fontWeight: 'bold',
        margin: '10%',
        color: Colors.BLACK
    },
    inp1: {
        height: 50,
        borderRadius: 10,
        width: '90%',
        margin: '2%',
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10
    },
    inputtxt: {
        fontSize: 18,
        padding: 6,
        marginLeft: 10,
        width: '80%'
    },
    txt: {
        fontSize: 15,
        margin: 15,
        color: Colors.BLACK
    },
    btn: {
        backgroundColor: Colors.DGREEN,
        marginTop: '8%',
        height: 50,
        width: '90%',
        justifyContent: 'center'
    },
    btntxt: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        padding: 5,
        color: '#fff'
    },


    icon: {
        margin: 10
    }
});
