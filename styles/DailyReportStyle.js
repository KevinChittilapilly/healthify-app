import { StyleSheet } from "react-native";

export default StyleSheet.create({
  appDivOuter: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: 'row'
  },
  appDiv: {
    height: 10,
    width: 10,
    borderWidth: 5,
    borderColor:'red'
  },
  appDiv1: {
    display: 'flex',
    flexDirection:'row',
  },
  appText: {
    marginTop: -5,
    marginLeft: 5
  }
});
