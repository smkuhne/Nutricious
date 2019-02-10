import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Button, AsyncStorage } from 'react-native';
import styles from "./Styles.js";
import { db } from './src/config/db.js'
import Storage, { setUser } from "./Storage.js";

let usersRef = db.ref('/Usernames/All');

export default class CreationScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
        }
    }

    checkName(name) {
        usersRef.once('value').then(snapshot => {
            // snapshot.val() is the dictionary with all your keys/values from the '/store' path

            this.setState({
                names: snapshot.val(),
            })
        });

        if(this.state.names.indexOf(name) == -1){
            AsyncStorage.setItem('account', '"true"')

            this.setState({
                availability: "Available"
            })

        } else {
            this.setState({
                availability: "Unavailable"
            })
        }
    }

    componentDidMount() {
        usersRef.once('value').then(snapshot => {
            // snapshot.val() is the dictionary with all your keys/values from the '/store' path

            this.setState({
                names: snapshot.val(),
            })
        });

        AsyncStorage.getItem('account') // get key
          .then(wasShown => {
                const { navigate } = this.props.navigation;
                if(wasShown){
                    navigate("Home");
                }
           })
       }

    render(){

        const { navigate } = this.props.navigation;

        if(!this.state.wasShown) {
            return (
                <View style={styles.special_container}>
                    <TextInput style={{height: 40, width:300, backgroundColor: '#FFFFFF'}}
                        onChangeText={(username) => {
                            this.checkName(username);
                            this.state.username = username;
                        }}/>
                    <Text>{"\n"}</Text>
                    <Button title={"Submit"}
                        onPress={() => {
                            if(this.state.availability){
                                const username = this.state.username;
                                db.ref('Usernames/All/' + (this.state.names.length)).set(username);
                                setUser(username);
                                AsyncStorage.setItem('account', true);
                                navigate("Home");
                            }
                        }}/>
                    <Text style={{color:'#FFFFFF'}}>{"\n"}{this.state.availability}</Text>
                </View>
            )
        } else {
            
        }

    }
}