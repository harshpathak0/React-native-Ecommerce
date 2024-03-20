import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../Common/Header';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { addProducts } from '../../Redux/Slices/ProductSlice';
import { useDispatch } from 'react-redux';


const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      let response = await axios.get('http://10.0.2.2:8080/customer/product');
      setProducts(response.data);
      dispatch(addProducts(response.data));
      console.log('Data fetched successfully:');
    } catch (error) {
      console.log('Internal error:', error.message);
      console.error('Unable to get product');
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../images/menu.png')}
        rightIcon={require('../../images/cart.png')}
        title={'TpBazar'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity 
            activeOpacity={1} 
            style={styles.productItem}
            onPress={() => {
              navigation.navigate("ProductDetail", {data: item})
            }}
            >
              <Image
                source={{ uri: item.photo }}
                style={styles.itemImage}
              />
              <View>
                <Text style={styles.name}>
                  {item.productname.length > 25
                    ? item.productname.substring(0, 30) + "....."
                    : item.productname}
                </Text>
                <Text style={styles.des}>
                   {item.description.length > 30
                   ?item.description.substring(0,30) + "...." 
                   :item.description}
                </Text>
                <Text style={styles.price}> {"₹" +" "+ item.price}</Text>
              </View>

            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems:"center",
    flexDirection: "row"
   
  },
  itemImage: {
    width: 100,
    height: 100
  },
  name:{
    fontSize:20,
    fontWeight:"600",
    marginLeft: 20
  },
  des:{
    marginLeft: 20
  },
  price:{
    color:"green",
    fontSize:18,
    fontWeight:"600",
    marginLeft: 20,
    marginTop: 10
  }
});        
