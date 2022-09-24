import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, RefreshControl, ActivityIndicator, ScrollView } from 'react-native';
import { Colors } from '../assets/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AirbnbRating } from 'react-native-ratings';
import { useDispatch } from 'react-redux';
import CartIndicator from '../Components/CartIndicator';

export default function Home({ navigation }) {

    const [DATA, setDATA] = useState([]);
    const [search, setsearch] = useState();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        NEW();
    }, []);

    const NEW = () => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products`)
            .then((response) => response.json())
            .then((actualData) => { setDATA(actualData), setLoading(false); });
    }


    const renderItem = ({ item }) => {
        return (
            <View style={styles.mainContainer__one}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', item)}>
                    <View style={styles.cardx}>
                        <Image source={{ uri: item?.image }} style={styles.image} />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={styles.text}>{item?.category}</Text>
                        <Text style={styles.text}>$ {item.price} </Text>

                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: '5%' }}>
                        <AirbnbRating
                            isDisabled={true}
                            count={5}
                            defaultRating={item?.rating?.rate}
                            size={18}
                            selectedColor={Colors.ORANGE}
                            unSelectedColor={Colors.GREY}
                            showRating={false}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity  >
                    <Ionicons name='person-circle' color={Colors.DGREY} size={35} onPress={() => navigation.navigate('Profile')} />
                </TouchableOpacity>
                <CartIndicator />
            </View>
            <ScrollView>
                <Text style={styles.heading}>Let's Do Practice</Text>
                <View style={styles.input}>
                    <Text style={styles.icon}> <FontAwesome5 name='search' size={20} color={Colors.DGREY} solid /></Text>
                    <TextInput
                        placeholder="Search"
                        style={styles.inputtxt}
                        onChangeText={(text) => setsearch(text)}
                        value={search}
                    />
                </View>
                {loading ?
                    <View style={{ marginVertical: '5%', alignSelf: 'center' }}>
                        <ActivityIndicator size="large" color={Colors.DGREEN} />
                        <Text style={styles.text}>Loading ...</Text>
                    </View> :
                    <FlatList
                        refreshControl={
                            <RefreshControl
                                refreshing={false}
                                onRefresh={NEW}
                            />
                        }
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns='2'
                    />
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 35,
        color: Colors.DGREEN,
        fontWeight: 'bold',
        marginHorizontal: '5%'
    },
    input: {
        height: 50,
        borderRadius: 10,
        width: '85%',
        marginVertical: '8%',
        marginHorizontal: '8%',
        flexDirection: 'row',
        backgroundColor: Colors.LGREY,
        alignItems: 'center',
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
        alignSelf: 'center'
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
        width: 100,
        height: 100,
    },
    text: {
        color: Colors.BLACK,
        fontSize: 15,
    },
    btn: {
        backgroundColor: 'lightgreen',
        height: 60,
        width: '70%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btntxt: {
        fontSize: 20,
        fontWeight: 'bold',
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