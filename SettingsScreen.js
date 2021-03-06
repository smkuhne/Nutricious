import React, { Component } from 'react';
import { ScrollView, Text, CheckBox, View, AsyncStorage} from 'react-native';
import styles from "./Styles.js";
import {getItem, setItem, setPrefItem, getPrefItem} from "./Storage.js";

export default class SettingsScreen extends Component {

    static navigationOptions = {
        title: 'Setting',

        headerStyle: {
            backgroundColor: '#6F6FFF',
        },

        headerTitleStyle: {
            fontSize: 20,
        },

        headerTintColor: '#FFFFFF',
    };

    constructor(props){
        super(props);

        this.state = {
            allergens: [{
                    value: false,
                    name: 'lactose',
                }, {
                    value: false,
                    name: 'gluten',
                }, {
                    value: false,
                    name: 'peanut',
                }, {
                    value: false,
                    name: 'treenut'
                }, {
                    value: false,
                    name: 'soy',
                }, {
                    value: false,
                    name: 'fish'
                }, {
                    value: false,
                    name: 'shellfish',
                }, {
                    value: false,
                    name: 'sesame',
                }],
            preferences: [{
                    value: false,
                    name: 'Pescatarian',
                }, {
                    value: false,
                    name: 'Vegetarian',
                }, {
                    value: false,
                    name: 'Halal',
                }, {
                    value: false,
                    name: 'Vegan',
                }]
        }
    }

    async componentWillMount() {
        let obj = await getItem();
        let pref = await getPrefItem();

        if(obj == null || obj == undefined){
            setItem(this.state.allergens);
        } else {
            this.setState({
                allergens: obj,
            });
        }

        if(pref == null || pref == undefined){
            setPrefItem(this.state.preferences);
        } else {
            this.setState({
                preferences: pref,
            });
        }

        
    }

    async setItem (){
        setItem(JSON.stringify(this.state.allergens));
        setPrefItem(JSON.stringify(this.state.preferences));
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.entry_container}>
                        <Text style={styles.text_header_bold}>Allergens</Text>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Lactose</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens[0].value}
                                onValueChange={() => {
                                    this.state.allergens[0].value = !this.state.allergens[0].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Gluten</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens[1].value}
                                onValueChange={() => {
                                    this.state.allergens[1].value = !this.state.allergens[1].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Peanut</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens[2].value}
                                onValueChange={() => {
                                    this.state.allergens[2].value = !this.state.allergens[2].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Tree Nut</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens[3].value}
                                onValueChange={() => {
                                    this.state.allergens[3].value = !this.state.allergens[3].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Soy</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens[4].value}
                                onValueChange={() => {
                                    this.state.allergens[4].value = !this.state.allergens[4].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Fish</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens[5].value}
                                onValueChange={() => {
                                    this.state.allergens[5].value = !this.state.allergens[5].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Shell Fish</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens[6].value}
                                onValueChange={() => {
                                    this.state.allergens[6].value = !this.state.allergens[6].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Sesame</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens[7].value}
                                onValueChange={() => {
                                    this.state.allergens[7].value = !this.state.allergens[7].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <Text style={styles.text_header_bold}>Dietary Preferences</Text>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Pescatarian</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.preferences[0].value}
                                onValueChange={() => {
                                    this.state.preferences[0].value = !this.state.preferences[0].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Vegetarian</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.preferences[1].value}
                                onValueChange={() => {
                                    this.state.preferences[1].value = !this.state.preferences[1].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Halal</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.preferences[2].value}
                                onValueChange={() => {
                                    this.state.preferences[2].value = !this.state.preferences[2].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Vegan</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.preferences[3].value}
                                onValueChange={() => {
                                    this.state.preferences[3].value = !this.state.preferences[3].value;
                                    this.setItem();
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}