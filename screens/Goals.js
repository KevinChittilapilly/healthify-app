import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Button, Card } from "react-native-paper";
import { getTasks, updateTask } from "../actions/action";
import styles from "../styles/GoalStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { category } from "../common/constant";
import Icon from "react-native-vector-icons/FontAwesome";

const Goals = (props) => {
  const [goals, setGoals] = useState([]);
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(props);
  }, [props]);
  useEffect(() => {
    getTasks().then((val) => {
      setGoals(val);
    });
  }, []);
  const deleteTask = (obj) => {
    let updatedGoals = JSON.parse(JSON.stringify(goals));
    const temp = updatedGoals.filter((gg) => gg.title !== obj.title);
    updateTask(temp).then(() => {
      setGoals(temp);
    });
  };
  const getTaskCount = (type) => {
    let count = 0;
    if (type === "complete") {
      goals?.map((gg) => {
        if (gg.status) {
          count++;
        }
      });
      return count;
    } else {
      goals?.map((gg) => {
        if (!gg.status) {
          count++;
        }
      });
      return count;
    }
  };
  const markTaskComplete = (obj) => {
    const updatedGoals = JSON.parse(JSON.stringify(goals));
    const temp = updatedGoals.find((gg) => gg.title === obj.title);

    temp.status = true;
    updateTask(updatedGoals).then(() => {
      setGoals(updatedGoals);
    });
  };
  return (
    <ScrollView>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 30,
          fontSize: 22,
        }}
      >
        My Goals
      </Text>
      <PieChart
        data={[
          {
            name: "Complete",
            population: getTaskCount("complete"),
            color: "#4caf50",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Incomplete",
            population: getTaskCount("incomplete"),
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={400}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          marginLeft: 10,
        }}
        accessor="population"
        backgroundColor="transparent"
        absolute
      />
      <View style={{ marginBottom: 30 }}>
        {goals?.map((obj, ind) => {
          return (
            <Card style={styles.cardOuter} key={ind}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                  {obj.title}
                </Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  {obj?.category?.map((cat) => {
                    const img = category.find(
                      (it) => it.title === cat
                    )?.iconSaved;
                    return (
                      <MaterialIcons
                        name={img}
                        size={14}
                        style={{ paddingTop: 10, paddingLeft: 5 }}
                      />
                    );
                  })}
                </View>
              </View>
              <Card.Actions>
                {!obj.status && (
                  <Button onPress={() => deleteTask(obj)}>Delete Item</Button>
                )}
                {obj.status ? (
                  <Button>Completed</Button>
                ) : (
                  <Button onPress={() => markTaskComplete(obj)}>
                    Mark Complete
                  </Button>
                )}
              </Card.Actions>
            </Card>
          );
        })}
      </View>
      <View>
        <Button
          icon={"plus"}
          mode="contained"
          onPress={() => props.navigation.navigate("AddGoal", { goals })}
          style={styles.addTaskBtn}
        >
          Add Goals
        </Button>
      </View>
    </ScrollView>
  );
};
export default Goals;
