import { StyleSheet } from "react-native";

export default StyleSheet.create({
  tip: {
    textAlign: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight:'bold'
  },
  sep: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  streak: {
    height: 100,
    width: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  streakOut: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
  },
  streakText: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  viewedApp: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    marginBottom: 20
  },
  viewedAppOuter: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    width: '100%',
    paddingLeft: 60,
    paddingRight: 60
  },
  viewedAppText:{
    // paddingRight: 20
  }
});
