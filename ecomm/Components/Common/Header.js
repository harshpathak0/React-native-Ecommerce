import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

// const {width, heigth} = Dimensions.get("width");
const Header = ({
    title,
    leftIcon,
    rightIcon,
    onClickLeftIcon,
    onClickRightIcon
}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => { onClickLeftIcon() }}
            >
                <Image
                    source={leftIcon}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
                style={styles.btn}
            >
                <Image
                    source={rightIcon}
                    style={[styles.icon, { width: 40, height: 40 }]}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: "auto",
        height: 65,
        backgroundColor: "#e08610",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    btn: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: "#fff",
    },
    title: {
        color: "#fff",
        fontSize: 20
    }
})