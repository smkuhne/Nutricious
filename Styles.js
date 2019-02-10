import {StyleSheet} from "react-native";

const styles =  StyleSheet.create({
    container: {
      flex: 1,
    },
    flatlist_container: {
        flex: 1,
    },
    entry_wrapper: {
        borderBottomWidth: 2,
        borderBottomColor: '#7F7F7F',
    },
    entry_container: {
        flex: 1,
        flexDirection: 'row',
        margin: 15,
    },
    entry_header: {
        flex: 1,
        fontSize: 20,
        alignItems: 'flex-start',
    },
    entry_subheader: {
        flex: 1,
        fontSize: 20,
        alignItems: 'flex-end',
    },
    text_header: {
        fontSize: 20,
    },
    text_subheader: {
        fontSize: 15,
    },
    food_container: {
        flex: 1,
        margin: 15,
    },
  });

  export default styles;