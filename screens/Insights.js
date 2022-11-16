import React from "react";
import { ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const Insights = () => {
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
        Insights
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 30,
          fontSize: 17,
        }}
      >
        Average Mobile Usage
      </Text>
      <LineChart
        data={{
          labels: ["5", "7", "9", "11"],
          datasets: [
            {
              data: [20, 45, 28, 80],
              strokeWidth: 2,
            },
          ],
        }}
        xAxisLabel=" hrs"
        yAxisSuffix=" users"
        withInnerLines={false}
        withHorizontalLines={false}
        withVerticalLines={false}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          marginLeft: 20,
          borderRadius: 16,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <View style={{ flex: 0.5 }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 17,
              marginBottom: 10,
              marginTop: 20,
            }}
          >
            Strengths
          </Text>
          <Text
            style={{ marginBottom: 10 }}
          >{`\u2022 We found your usage is less than 5% users`}</Text>
          <Text
            style={{ marginBottom: 10 }}
          >{`\u2022 We found you have spent more time in exersing as compared to your peers`}</Text>
        </View>
        <View style={{ flex: 0.5 }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 17,
              marginBottom: 10,
              marginTop: 20,
            }}
          >
            Weakness
          </Text>
          <Text
            style={{ marginBottom: 10 }}
          >{`\u2022We found your usage is more than 50% users`}</Text>
          <Text
            style={{ marginBottom: 10 }}
          >{`\u2022 We found you have spent less time in exersing as compared to your peers`}</Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 30,
            fontSize: 17,
          }}
        >
          Tips <FontAwesome name="diamond" size={14} color="black" />
        </Text>
        <View
          style={{ marginBottom: 20, display: "flex", flexDirection: "row" }}
        >
          <Text>
            {`\u2022 Our user reported less screen time when they when they`}{" "}
            <Text style={{fontWeight:'bold'}}>Listened to Music</Text>
            <View style={{ display: "flex", flex: 1,flexDirection:'row', marginLeft:30,marginTop: 20}}>
              <AntDesign name="pluscircle" size={15} color="purple" />
              <Text style={{ fontStyle: "italic",marginBottom: -50 }}>Add to Goal</Text>
            </View>
          </Text>
        </View>
        <View
          style={{ marginBottom: 20, display: "flex", flexDirection: "row" }}
        >
          <Text>
            {`\u2022 Our user reported less screen time when they when they`}{" "}
            <Text style={{fontWeight:'bold'}}>Listened to Music</Text>
            <View style={{ display: "flex", flex: 1,flexDirection:'row', marginLeft:30,marginTop: 20}}>
              <AntDesign name="pluscircle" size={15} color="purple" />
              <Text style={{ fontStyle: "italic",marginBottom: -50 }}>Add to Goal</Text>
            </View>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Insights;
