import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({bg, title, onClick, color}) => {
  return (
    <TouchableOpacity 
    activeOpacity={1} 
    style={[styles.btn,{backgroundColor:bg}]}
    onPress={() => {
        onClick();
    }}>
      <Text style={{color:color, fontSize:20, fontWeight:"500"}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        width:Dimensions.get("window").width - 40,
        height: 50,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:30,
        borderRadius:15
    }
})