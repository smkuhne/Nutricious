import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from "./Styles.js";

export default class LocaleScreen extends Component {
    static navigationOptions = {
        title: 'Menu',

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
            list: navigation.getParam('list', []),
        }
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <FlatList style={styles.flatlist_container}
                    data={this.state.list}
                    renderItem={({item}) => 
                        <TouchableOpacity style={styles.entry_wrapper}
                            onPress={() => navigate("Food", {food: item})}>
                            <View style={styles.entry_container}>
                                <View style={styles.entry_header}>
                                    <Text style={styles.text_header}>{item.name}</Text>
                                </View>
                                <View style={styles.entry_subheader}>
                                    <Text style={styles.text_subheader}>{item.type}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, key) => key}
                    />

            </View>
        )
    }
}