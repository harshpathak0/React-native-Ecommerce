import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../Common/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import CustomButton from '../Common/CustomButton'

const ProductDetail = () => {

    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={styles.container}>
            <Header leftIcon={require("../images/back.png")}
                rightIcon={require("../images/cart.png")}
                title={"Product Detail"}
                onClickLeftIcon={() => {
                    navigation.goBack()
                }}
            />
            <Image source={{ uri: route.params.data.photo }} style={styles.banner} />
            <Text style={styles.title}>{route.params.data.productname}</Text>
            <Text style={styles.desc}>{route.params.data.description}</Text>
            <Text style={styles.price}>{"₹" + " " + route.params.data.price}</Text>
            <TouchableOpacity style={styles.wishListBtn}>
                <Image source={require("../images/heart.png")} style={styles.wishListImg}/>
            </TouchableOpacity>
            <CustomButton
                bg={"#d9931a"}
                title={"Add To Cart"}
                color={"#fff"}
                onClick={() => { }} />
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    banner: {
        width: "100%",
        height: 300,
        resizeMode: "center",
        marginTop: 10
    },
    title: {
        fontSize: 25,
        color: "#000",
        fontWeight: "600",
        marginLeft: 15,
        marginTop: 20
    },
    desc: {
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
    },
    price: {
        color: "green",
        marginLeft: 20,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "700"
    },
    wishListBtn:{
        position:"absolute",
        right:13,
        top:80,
        backgroundColor:"#adaba8",
        justifyContent:"center",
        alignItems:"center",
        width:50,
        height:50,
        borderRadius:25
    },
    wishListImg:{
        width:24,
        height:24
    }
})