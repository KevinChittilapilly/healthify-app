import React from "react";
import { ScrollView, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";
import styles from "../styles/DailyReportStyle";

const DailyReport = () => {
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
        Daily Report
      </Text>
      <Text style={{fontWeight:'bold',textAlign:'center',marginTop:30}}>Today's Consumption</Text>
      <PieChart
        data={[
          {
            name: "Seoul",
            population: 6,
            color: "#19fd0a",
            legendFontColor: "#7F7F7F",
            legendFontSize: 0,
          },
          {
            name: "Toronto",
            population: 7,
            color: "#ffeb00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "New York",
            population: 8,
            color: "#8e9ff7",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Moscow",
            population: 10,
            color: "#37d3b6",
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
          marginLeft: 70,
        }}
        hasLegend={false}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <View style={styles.appDivOuter}>
        <View style={styles.appDiv1}>
          <View
            style={{
              height: 10,
              width: 10,
              borderWidth: 5,
              borderColor: "#19fd0a",
            }}
          ></View>
          <Text style={styles.appText}>WhatsApp</Text>
        </View>
        <View style={styles.appDiv1}>
          <View
            style={{
              height: 10,
              width: 10,
              borderWidth: 5,
              borderColor: "#ffeb00",
            }}
          ></View>
          <Text style={styles.appText}>Telegram</Text>
        </View>
        <View style={styles.appDiv1}>
          <View
            style={{
              height: 10,
              width: 10,
              borderWidth: 5,
              borderColor: "#8e9ff7",
            }}
          ></View>
          <Text style={styles.appText}>Instagram</Text>
        </View>
        <View style={styles.appDiv1}>
          <View
            style={{
              height: 10,
              width: 10,
              borderWidth: 5,
              borderColor: "#37d3b6",
            }}
          ></View>
          <Text style={styles.appText}>Meta</Text>
        </View>
      </View>
      <Text style={{fontWeight:'bold',textAlign:'center',marginTop:30}}>Weekly Analysis</Text>
      <BarChart
        data={{
          labels:
            ['Mon', 'Tues', 'Wed'],
          datasets: [
            {
              data: [7,10,8],
            },
          ],
        }}
        width={400}
        height={220}
        yAxisLabel={'Hrs'}
        withInnerLines={false}
        chartConfig={{
          backgroundColor: 'rgb(238,238,238)',
          backgroundGradientFrom: 'rgb(238,238,238)',
          backgroundGradientTo: 'rgb(238,238,238)',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        fromZero
      />
    </ScrollView>
  );
};
export default DailyReport;
