import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListView = ({ itemList }) => {
    
    return(
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) =>
                console.log(item)
                (<CustomRow
                title={item.title}
                description={item.description}
                keyExtractor={item => item.id.toString()}
                   
                />)}
            />

    </View>
    );
}

export default CustomListView;