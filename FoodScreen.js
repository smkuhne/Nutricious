import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from "./Styles.js";

export default class FoodScreen extends Component {
    static navigationOptions = {
        title: 'Food',

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

        const { navigation } = this.props;
        this.state = {
            food: navigation.getParam('food', []),
        }

        navigationOptions = {
            title: this.state.food.title,
        }
    }

    render() {
        return (
            <View style={styles.food_container}>
                <Text style={styles.text_header}>{this.state.food.name}{"\n"}</Text>
                <Text style={styles.text_subheader}>Type: {this.state.food.type}{"\n"}</Text>
                <Text style={styles.text_subheader}>Available at: {this.state.food.place}{"\n"}</Text>
                <Text style={styles.text_subheader}>Calories: {this.state.food.calories}{"\n"}</Text>
                <Text style={styles.text_subheader}>Ingredients: {this.state.food.ingredients.join(", ")}{"\n"}</Text>
                <Text style={styles.text_subheader}>Allergens: {this.state.food.allergens.join(", ")}{"\n"}</Text>
            </View>
        )
    }
}