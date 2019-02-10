import {StyleSheet} from "react-native";

const styles =  StyleSheet.create({
    container: {
      flex: 1,
    },
    centered: {
        alignItems: 'center',
    },
    separator: {
        borderBottomColor: '#7F7F7F',
        borderBottomWidth: 1,
    },
    flatlist_container: {
        flex: 1,
    },
    entry_wrapper: {
        marginTop: 10,
        marginBottom: 10,
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
    text_header_bold: {
        fontSize: 20,
        fontWeight: 'bold',
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