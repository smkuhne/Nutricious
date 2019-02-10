import {AsyncStorage} from 'react-native';

export const getItem =  async function () {
    let item = await AsyncStorage.getItem("Allergens");
    //You'd want to error check for failed JSON parsing...
    return JSON.parse(item);
}

export const setItem =  async function (input) {
    await AsyncStorage.setItem("Allergens", input);
}
