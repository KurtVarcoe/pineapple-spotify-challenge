import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default ListItem = ({item}) => {
    return (
        <View style={styles.listItemView}>
            <Text style={styles.num}>{item.id}</Text>
            <Image style={styles.listItemImage} source={require('../assets/im-fine.jpeg')}/>
            <View style={styles.listItemInfo}>
                <Text style={styles.listItemText}>{item.title}</Text>
                <Text style={styles.viewCount}>{item.viewCount}</Text>
            </View>
            <Icon style={styles.listItemIcon} name="dots-three-horizontal" size={20} color="silver"/>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemIcon: {
        flex: 1
    },
    listItemImage: {
        width: 50,
        height: 50,
    },
    listItemInfo: {
        flex: 6,
        paddingLeft: 15
    },
    listItemText: {
        color: 'white',
        fontSize: 20
    },
    listItemView: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    num: {
        color: 'white',
        flex: 1,
        alignSelf: 'center',
        fontSize: 16,
        paddingLeft: 8
    },
    viewCount: {
        color: 'silver',
        fontSize: 16
    }
});