import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { updateTask } from "../actions/action";
import styles from "../styles/GoalStyle";

const AddGoals = (props) => {
  const [category, setCategory] = useState([
    { title: "Excersise", icon: "run", status: false },
    { title: "Social", icon: "message-reply-text", status: false },
    { title: "Sport", icon: "basketball", status: false },
    { title: "Music", icon: "music", status: false },
    { title: "Other", icon: "application", status: false },
  ]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const changeSelected = (item) => {
    const newCategory = JSON.parse(JSON.stringify(category));
    const temp = newCategory.find((cat) => cat.title === item.title);
    temp.status = !item.status;
    setCategory(newCategory);
  };
  const saveTask = () => {
    setLoading(true);
    let newObj = {};
    newObj.title = title;
    newObj.time = time + " mins";
    const arr = [];
    category.map((cat) => {
      if (cat.status) {
        arr.push(cat.title);
      }
    });
    newObj.category = arr;
    newObj.status = false;
    if (props.route.params?.goals?.length) {
      props.route.params.goals.push(newObj);
      updateTask(props.route.params.goals).then(() => {
        console.log(newObj);
        setLoading(false);
        props.navigation.navigate("Default", { newObj });
      });
    } else {
      updateTask([newObj]).then(() => {
        props.navigation.navigate("Default", { newObj });
        setLoading(false);
      });
    }
  };
  return (
    <>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 30,
          fontSize: 22,
        }}
      >
        Add Goals
      </Text>
      <View>
        <TextInput
          onChangeText={(text) => setTitle(text)}
          label={"Title"}
          style={{
            backgroundColor: "transparent",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></TextInput>
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setTime(text)}
          label={"Time to complete in mins"}
          style={{
            backgroundColor: "transparent",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></TextInput>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 17 }}>
          Choose your category
        </Text>
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            marginLeft: 0,
          }}
        >
          {category.map((item, key) => {
            return (
              <Button
                key={key}
                icon={item.icon}
                mode="contained"
                dark={false}
                labelStyle={
                  item.status ? { color: "white" } : { color: "#767676" }
                }
                onPress={() => changeSelected(item)}
                style={
                  item.status
                    ? styles.categoryBtnsSelected
                    : styles.categoryBtns
                }
              >
                {item.title}
              </Button>
            );
          })}
        </View>
        <Button
          loading={loading}
          onPress={() => saveTask()}
          mode="contained"
          style={styles.saveBtn}
        >
          Save
        </Button>
      </View>
    </>
  );
};
export default AddGoals;
