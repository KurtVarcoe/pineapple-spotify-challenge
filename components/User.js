import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Entypo"


export default User = () => {
    return(
        <View style={styles.userContainer}>
            <View style={styles.imageContainer}>
                <ImageBackground imageStyle={{borderRadius: 25}} source={require('../assets/highklassified.jpg')} style={styles.favImage}>
                    <View style={styles.heartIconContainer}>
                        <Icon name="heart" color="white" size={16} style={styles.heartIcon}/>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.artistInfo}>
                <Text style={styles.userName}>Inzingoma Ezithandiwe</Text>
                <Text style={styles.numFav}>5 izingoma • High Klassified</Text>
            </View>
            <View style={styles.userIconContainer}>
                <Icon styles={styles.userIcon} name="chevron-thin-right" size={20} color="silver"/>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    artistInfo: {
        flex: 6,
        paddingLeft: 20,
        justifyContent: 'center'
    },
    favImage: {
        width: 50,
        height: 50,
        // borderRadius: 25,
        flex: 0.8,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    heartIconContainer: {
        backgroundColor: '#1DB954',
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        borderColor: 'black',
        borderWidth: 3, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    numFav: {
        color: 'silver'
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingBottom: 16
    },
    userIconContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    userName: {
        color: 'white',
        fontSize: 18
    }
})