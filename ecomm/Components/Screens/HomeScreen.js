import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../Common/Header';
import Home from './Tabs/Home';
import Search from './Tabs/Search';
import Wishlist from './Tabs/Wishlist';
import Notification from './Tabs/Notification';
import User from './Tabs/User';

const HomeScreen = () => {

  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {/* <Header
        leftIcon={require("../images/menu.png")}
        rightIcon={require("../images/shopping-bag.png")}
        title={"TpBazar"}
      /> */}
      {selectedTab == 0 ? (<Home />) :
        selectedTab == 1 ? (<Search />) :
          selectedTab == 2 ? (<Wishlist />) :
            selectedTab == 3 ? (<Notification />) :
              (<User />)
      }

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelectedTab(0) }}>
          <Image source={selectedTab == 0 ? require("../images/home_fill.png") : require("../images/home.png")} style={styles.bottomTabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelectedTab(1) }}>
          <Image source={selectedTab == 1 ? require("../images/search_fill.png") : require("../images/search.png")} style={styles.bottomTabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelectedTab(2) }}>
          <Image source={selectedTab == 2 ? require("../images/heart_fill.png") : require("../images/heart.png")} style={styles.bottomTabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelectedTab(3) }}>
          <Image source={selectedTab == 3 ? require("../images/notification_fill.png") : require("../images/notification.png")} style={styles.bottomTabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelectedTab(4) }}>
          <Image source={selectedTab == 4 ? require("../images/user_fill.png") : require("../images/user.png")} style={styles.bottomTabIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  bottomTab: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomTabIcon: {
    width: 24,
    height: 24
  }
})