import { StyleSheet } from "react-native";

export default StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 22,
        marginBottom: 30
    },
    cardOuter: {
        width: '85%',
        marginLeft: 30,
        marginTop: 20
    },
    addTaskBtn:{
        width: '40%',
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:30
    },
    categoryBtns:{
        width:100,
        margin:10,
        backgroundColor:'white',
        color: '#767676',
        border: '2px solid #ababab'
    },
    categoryBtnsSelected:{
        width:100,
        margin:10,
        backgroundColor:'#6200ffe8',
        border: '2px solid #ababab'
    },
    saveBtn:{
        marginTop:130,
        width: 150,
        marginLeft:'auto',
        marginRight:'auto'
    }
});
