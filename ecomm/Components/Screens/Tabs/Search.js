import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../Common/Header';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const products = useSelector(state => state);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const [oldData, setOldData] = useState(products.product.data);
  const [searchedList, setSearchedList] = useState(oldData);
  const filterData = (txt) => {
    let newData = oldData.filter(item => {
      return item.productname && item.productname.toLowerCase().includes(txt.toLowerCase());
    });
    setSearchedList(newData);
  }

  //  console.log(JSON.stringify(products.product.data));
  return (
    <View style={styles.container}>
      <Header title={"Search items"} />
      <View style={styles.searchView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../../images/search.png")} style={styles.icon} />
          <TextInput
            value={search}
            onChangeText={txt => {
              setSearch(txt)
              filterData(txt)
            }}
            placeholder="Search items here"
            style={styles.input} />
        </View>

        {search !== '' && (
          <TouchableOpacity
            style={[styles.icon, { justifyContent: "center", alignItems: "center" }]}
            onPress={ () => {
              setSearch('')
            }}>
            <Image source={require("../../images/close.png")} style={[styles.icon, { width: 16, height: 16 }]} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList 
      data={searchedList} 
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.productItem}
            onPress={() => {
              navigation.navigate("ProductDetail", { data: item })
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
                  ? item.description.substring(0, 30) + "...."
                  : item.description}
              </Text>
              <Text style={styles.price}> {"₹" + " " + item.price}</Text>
            </View>

          </TouchableOpacity>
        )
      }} />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchView: {
    width: "90%",
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center"
  },
  icon: {
    width: 23,
    height: 23,
    resizeMode: "center"
  },
  input: {
    width: "80%",
    marginLeft: 10
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: "center",
    flexDirection: "row"

  },
  itemImage: {
    width: 100,
    height: 100
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20
  },
  des: {
    marginLeft: 20
  },
  price: {
    color: "green",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 20,
    marginTop: 10
  }
})