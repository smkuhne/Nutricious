import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from "./Styles.js";

import { db } from './src/config/db.js'

let localesRef = db.ref('/Locales');
export default class HomeScreen extends Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Eating Locales',

        headerStyle: {
            backgroundColor: '#6F6FFF',
        },

        headerTitleStyle: {
            fontSize: 20,
        },

        headerTitleStyle: {
            color: '#FFFFFF',
        },

        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
                title="Pref">
                <Image style={{marginRight: 10}}source={require('./images/settings.png')}/>
            </TouchableOpacity>
        ),
    });

    constructor(props){1    
        super(props);
            
        this.state = { loading: true };
    }

    componentDidMount() {

        localesRef.once('value').then(snapshot => {
            // snapshot.val() is the dictionary with all your keys/values from the '/store' path
            this.setState({
                loading: false,
                locales: snapshot.val(),
            })
        });

        return;

        return fetch("http://www.axondes.com/testing/document.json")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    locales: responseJson.Locales,
                  }, function(){
          
                  });
            })
            .catch((error) =>
                console.error(error)
            );
    }

    render() {
        const {navigate} = this.props.navigation;

        if(this.state.loading){
            return (
                <View style={styles.container}>
                    <Text>Loading</Text> 
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <FlatList style={styles.flatlist_container}
                    data={this.state.locales}
                    renderItem={({item}) => 
                        <TouchableOpacity style={styles.entry_wrapper}
                            onPress={() => navigate("Locale", {list: item.list})}>
                            <View style={styles.entry_container}>
                                <View style={styles.entry_header}>
                                    <Text style={styles.text_header}>{item.name}</Text>
                                </View>
                                <View style={styles.entry_subheader}>
                                    <Text style={styles.text_subheader}>{item.hours}</Text>
                                </View>    
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={(index, key) => key.toString()}
                    />
            </View>
        );
    }
}