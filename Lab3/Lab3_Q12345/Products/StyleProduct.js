import { StyleSheet } from "react-native";

export default styles = StyleSheet.create ({
    container: {
        marginVertical: 20,
        marginLeft: 10,
        marginRight: 5,
    },

    title: {
        color: 'grey',
        fontSize: 30,
        marginBottom: 20,
    },

    card: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#eef7ed',
        marginVertical: 5,
        marginHorizontal: 15, 
        padding: 5,
    }, 
    
    img: {
        width: 100,
        height: 100,
    },

    left: {
        width: '25%',
    },

    right: {
        width:'75%',
        marginLeft: 5,
    },

    titlePr: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    dis: {
        color: 'green',
    },

    button: {
        
    },

    groupButton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    /*add */

    titleAdd: {
        color: 'purple',
        fontSize: 15,
        fontWeight: 'bold',
    },

    label: {
        color: 'black',
    },

    /*search*/

    titleSearch: {
        fontWeight: 'bold',
    }
});