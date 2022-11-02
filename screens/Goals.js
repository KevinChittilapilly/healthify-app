import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Button, Card } from "react-native-paper";
import { getTasks, updateTask } from "../actions/action";
import styles from "../styles/GoalStyle";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    getTasks().then((val) => {
      setGoals(val);
    });
  }, []);
  const deleteTask = (obj) => {
    let updatedGoals = JSON.parse(JSON.stringify(goals));
    const temp = updatedGoals.filter((gg)=>gg.title !== obj.title);
    updateTask(temp).then(()=>{
      setGoals(temp);
    })
  }
  const getTaskCount = (type) => {
    let count = 0;
    if(type==='complete') {
      goals.map((gg)=>{
        if(gg.status) {
          count++;
        }
      })
      return count;
    } else {
      goals.map((gg)=>{
        if(!gg.status) {
          count++;
        }
      })
      return count;
    }
  }
  const markTaskComplete = (obj) => {
    const updatedGoals = JSON.parse(JSON.stringify(goals));
    const temp = updatedGoals.find((gg) => gg.title === obj.title);
   
    temp.status = true;
    updateTask(updatedGoals).then(()=>{
      setGoals(updatedGoals);
    })
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
            population: getTaskCount('complete'),
            color: "#4caf50",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Incomplete",
            population: getTaskCount('incomplete'),
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
              <Card.Title title={obj.title} />
              <Card.Actions>
                {!obj.status &&<Button onPress={()=>deleteTask(obj)}>Delete Item</Button>}
                {obj.status ? (
                  <Button>Completed</Button>
                ) : (
                  <Button onPress={()=>markTaskComplete(obj)}>Mark Complete</Button>
                )}
              </Card.Actions>
            </Card>
          );
        })}
      </View>
      <View>
        <Button icon={'plus'} mode='contained' style={styles.addTaskBtn}>Add Goals</Button>
      </View>
    </ScrollView>
  );
};
export default Goals;
