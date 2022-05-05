import React, { useState } from "react";
import {Text, View, FlatList, StyleSheet} from "react-native";
import ListItem from './ListItem';

export default TrackList = () => {
  const [items,setItems] = useState([
    {
        id: 1,
        title: "I'm Fine - IMANU Remix",
        viewCount: "823,428",
    },
    {
        id: 2,
        title: "I'm Fine",
        viewCount: "1,047,056",
    }
  ]);

  return (
      <View style={styles.trackListView}>
          <Text style={styles.trackHeader}>Okudumile</Text>
          <FlatList
            data={items}
            renderItem={({item}) => (
              <ListItem item={item} />
            )}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
          />
      </View>
  )
}


const styles = StyleSheet.create({
    title: {
        color: 'white'
    },
    trackHeader: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        flex: 2
    },
    trackListView: {
      flex: 2,
      justifyContent: 'space-between',
    }
})