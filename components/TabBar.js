import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
      <View style={styles.tabView}>
        <Text style={styles.tabView}></Text>
      </View>
    );
}

function Search() {
    return (
        <View style={styles.tabView}>
          <Text style={styles.tabView}></Text>
        </View>
    );
}

function Library() {
    return (
      <View style={styles.tabView}>
        <Text style={styles.tabView}></Text>
      </View>
    );
}

export default TabBar = () => {
  return (
    <Tab.Navigator 
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 5,
          backgroundColor: 'rgba(34,36,40,1)',
          position: 'absolute',
          borderTopWidth: 0,
        },
      tabBarLabelPosition: "below-icon",
      tabBarActiveTintColor: "white",
    })}>
        <Tab.Screen name="Ikhaya" component={HomeScreen} options={{tabBarIcon: () => {
          return <Icon name="home-outline" size={35} color="gray"/>
        }, tabBarLabelStyle: {fontSize: 14}}}/>
        <Tab.Screen name="Sesha" component={Search} options={{tabBarIcon: () => {
          return <Icon name="search" size={35} color="gray"/>
        }, tabBarLabelStyle: {fontSize: 14}}}/>
        <Tab.Screen name="Umtapo Wakho" component={Library} options={{tabBarIcon: () => {
          return <Icon name="library" size={35} color="gray"/>
        }, tabBarLabelStyle: {fontSize: 14}}}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: "black"
  }
});