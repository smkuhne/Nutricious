import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Text, View, FlatList, TouchableOpacity, Image, PermissionsAndroid, AsyncStorage } from 'react-native';
import Location from './Location.js';
import styles from "./Styles.js";

import { db } from './src/config/db.js'
import {getItem, getPrefItem}from "./Storage.js";

let localesRef = db.ref('/Locales');
export default class HomeScreen extends Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Eating Locales',

        headerLeft: null,

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
            
        this.state = {
            loading: true,
            location: false, };
    }

    async allergenCheck () {
        let obj = await getItem();
        let pref = await getPrefItem();

        if(obj == null){
            obj = [];
        }
        if(pref == null){
            pref = [];
        }

        this.setState({
             allergens: obj,
             pref: [],
             indeces: [],
             preferences: pref,
        });

        for(const i of this.state.allergens){
            if(i.value == true){
                for(let j of this.state.locales){
                    for(let h of j.list){
                        for(let k of h.allergens){
                            if(i.name == k){
                                this.state.indeces.push({x: this.state.locales.indexOf(j), y: j.list.indexOf(h)});
                            }
                        }
                    }
                }
            }



            let offset = 0;
            let lastX = 0;
            for(const i of this.state.indeces){
                if(lastX != i.x){
                    lastX = i.x;
                    offset = 0;
                }
                this.state.locales[i.x].list.splice(i.y - offset, 1);
                offset += 1;
            }

            this.state.indeces = [];
        }

        if(this.state.preferences[0].value == false && this.state.preferences[1].value == false &&
           this.state.preferences[2].value == false && this.state.preferences[3].value == false){
               return;
        }

        for(i = 0; i < this.state.locales.length; i++){
            for(j = 0; j < this.state.locales[i].list.length; j++){
                this.state.indeces.push({x: i, y: j});
            }
        }

        let k = 0;

        for(const i of this.state.preferences){
            if(i.value == true){
                for(j = 0; j < this.state.locales.length; j++){
                    for(h = 0; h < this.state.locales[j].list.length; h++){
                        if(i.name == this.state.locales[j].list[h].type){
                            this.state.indeces.splice(k, 1);
                            k--;
                        }
                        k++;
                    }
                }
            }
        }
        
        let offset = 0;
        let lastX = 0;
        for(const i of this.state.indeces){
            if(lastX != i.x){
                lastX = i.x;
                offset = 0;
            }
            this.state.locales[i.x].list.splice(i.y - offset, 1);
            offset += 1;
        }

        this.state.indeces = [];

        

        
    }

    componentDidMount() {
        const didBlurSubscription = this.props.navigation.addListener(
            'didFocus',
            payload => {
                localesRef.once('value').then(snapshot => {
                    // snapshot.val() is the dictionary with all your keys/values from the '/store' path
                    everything = snapshot.val();

                    this.setState({
                        locales: snapshot.val(),
                    })

                    this.allergenCheck();
                });
            }
        );

        try {
            const granted = PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Distance to Eating Locales',
                    message: 'This permission is required to calculate to distance to ' +
                    'eating locales.',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'Ok',
                },
            );
        } finally {
            this.state.location = true;
        }

        localesRef.once('value').then(snapshot => {
            // snapshot.val() is the dictionary with all your keys/values from the '/store' path
            everything = snapshot.val();

            this.setState({
                loading: false,
                locales: snapshot.val(),
            })

            this.allergenCheck();
        });

        return;
    }

    render() {
        const {navigate} = this.props.navigation;

        if(this.state.loading || this.state.location == false){
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
                            onPress={() => {
                                navigate("Locale", {list: item.list})
                            }}>
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
                    ListFooterComponent={() => <View style={styles.centered}><Location/></View>}
                    ItemSeparatorComponent={() => <View style={styles.separator}></View>}/>
            </View>
        );
    }
}