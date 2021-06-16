import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    Text,
    Button,
    TouchableOpacity
} from "react-native";
import FormButton from '../Components/ButtonComponent';
import {db} from '../firebase';
import CustomRow from './CustomRow';
import {windowHeight, windowWidth} from '../utils/Dimensions';

export default class Jobdetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
        }
    }

    componentDidMount() {
        this.fetchJobs();
    }

    fetchJobs() {
        const Comment = [];
       this.setState({ refreshing: true });
        db
        .collection('jobDetails').onSnapshot(snapshot => {
          snapshot
            .docs
            .map(doc => {
               // const {jobid,jobTitle,jobDescription}=
                Comment.push(
                    doc.data()
                   
                  );
             
              this.setState({ refreshing: false });
            });
        });
       this.setState({ data:Comment});
    }

    _onPress(item) {
        console.log(item.jobTitle);
        this.props.navigation.navigate('jobDescription', {
          itemId: item.jobid,
          title: item.jobTitle,
          description:item.jobDescription,
          location:item.joblocation
        });
      }

    renderItemComponent = (item) =>{
   
    return(
    <View style={styles.container}>
    <Image source={require('../assets/accountant.png')} style={styles.photo} />
    <View style={styles.container_text}>
        <Text style={styles.title}>
           {item.jobTitle}
        </Text>
        <Text style={styles.description}>
        {item.jobDescription}
        </Text>
        <TouchableOpacity style={styles.buttonContainer}  onPress={() => this._onPress(item)}>
      <Text style={styles.buttonText}>Apply Now!</Text>
    </TouchableOpacity>
    </View>

</View>
    );
    }

    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchJobs() }); // call jobs after setting the state
    }

    render() {
       const {data}=this.state;
      return (
        <SafeAreaView>
           <FlatList
         data={data}
   
    
    renderItem={({ item, index }) => 
    this.renderItemComponent(item)
          }
    keyExtractor={item => item.jobid}
/>
        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        height:90
    },
    title: {
        fontSize: 16,
        color: 'black',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    buttonstyle:{
      
        width:5,
        marginRight: 5,
       
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
    buttonContainer: {
        marginTop: 10,
        width: '40%',
        height: windowHeight / 25,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        left:180
      },
      buttonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
      },
});