import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import {db} from '../firebase';
import CustomRow from './CustomRow';

export default class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
        }
    }

    componentDidMount() {
        this.fetchCats();
    }

    fetchCats() {
        this.setState({ refreshing: true });
        db
        .collection('jobDetails').onSnapshot(snapshot => {
          snapshot
            .docs
            .map(doc => {
              this.setState({ data: doc.data()});
              this.setState({ refreshing: false });
            });
        });
       
    }

    renderItemComponent = (data) =>
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{ uri: data.item.url }} />
        </TouchableOpacity>

    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
    }

    render() {
      return (
        <SafeAreaView>
           <FlatList
         data={this.state.data}
    renderItem={({ item }) => <CustomRow
        title={item.jobTitle}
        description={item.jobDescription}
       
    />}
    keyExtractor={item => item.jobid}
/>
        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },
});


