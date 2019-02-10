import React, { Component } from 'react';
import { ScrollView, Text, CheckBox, View, AsyncStorage } from 'react-native';
import styles from "./Styles.js";

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
            allergens: {
                milk: false,
                egg: false,
                peanut: false,
                treenut: false,
                soy: false,
                wheat: false,
                fish: false,
                shellfish: false,
                sesame: false,
            }
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('Allergens')
        .then((value) => {
            if(value != null){
                this.setState({
                    allergens: JSON.parse(value),
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.text_header}>Allergens{"\n"}</Text>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Milk</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens.milk}
                                onValueChange={() => {
                                    this.state.allergens.milk = !this.state.allergens.milk;
                                    AsyncStorage.setItem("Allergens", JSON.stringify(this.state.allergens));
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Egg</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens.egg}
                                onValueChange={() => {
                                    this.state.allergens.egg = !this.state.allergens.egg;
                                    AsyncStorage.setItem("Allergens", JSON.stringify(this.state.allergens));
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
                                value={this.state.allergens.peanut}
                                onValueChange={() => {
                                    this.state.allergens.peanut = !this.state.allergens.peanut;
                                    AsyncStorage.setItem("Allergens", JSON.stringify(this.state.allergens));
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
                                value={this.state.allergens.treenut}
                                onValueChange={() => {
                                    this.state.allergens.treenut = !this.state.allergens.treenut;
                                    AsyncStorage.setItem("Allergens", JSON.stringify(this.state.allergens));
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
                                value={this.state.allergens.soy}
                                onValueChange={() => {
                                    this.state.allergens.soy = !this.state.allergens.soy;
                                    AsyncStorage.setItem("Allergens", JSON.stringify(this.state.allergens));
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                    <View style={styles.entry_container}>
                        <View style={styles.entry_header}>
                            <Text style={styles.text_header}>Wheat</Text>
                        </View>
                        <View style={styles.entry_subheader}>
                            <CheckBox style={styles.text_subheader}
                                value={this.state.allergens.wheat}
                                onValueChange={() => {
                                    this.state.allergens.wheat = !this.state.allergens.wheat;
                                    AsyncStorage.setItem("Allergens", JSON.stringify(this.state.allergens));
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
                                value={this.state.allergens.fish}
                                onValueChange={() => {
                                    this.state.allergens.fish = !this.state.allergens.fish;
                                    AsyncStorage.setItem("Allergens", JSON.stringify(this.state.allergens));
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
                                value={this.state.allergens.shellfish}
                                onValueChange={() => {
                                    this.state.allergens.shellfish = !this.state.allergens.shellfish;
                                    AsyncStorage.setItem("Allergens", JSON.stringify(this.state.allergens));
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
                                value={this.state.allergens.sesame}
                                onValueChanged={() => {
                                    this.state.allergens.sesame = !this.state.allergens.sesame;
                                    AsyncStorage.setItem("Allergens", JSON.stringify(this.state.allergens));
                                    this.forceUpdate();
                                }}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}