import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles/HomeStyle";
import { Chip } from "react-native-paper";
import { getDailyTip } from "../actions/action";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Home = () => {
  const [tip, setTip] = useState("");
  useEffect(() => {
    getDailyTip().then((val) => {
      setTip(val);
    });
  }, []);
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 30,
          fontSize: 22,
        }}
      >
        Home
      </Text>
      <View>
        <Text style={styles.tip}>Today's Tip</Text>

        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          {(tip && tip) || ""}
        </Text>
      </View>
      <View style={styles.sep} />
      <View>
        <Text style={styles.tip}>Weakly Streak</Text>
        <Text> (Shows the number of days in week target was achieved.)</Text>
      </View>
      <View style={styles.streakOut}>
        <Chip
          mode="outlined"
          style={styles.streak}
          textStyle={styles.streakText}
        >
          <View>
          <Text>4</Text>
          </View>
        </Chip>
        <Chip
          mode="outlined"
          style={styles.streak}
          textStyle={styles.streakText}
        >
          5
        </Chip>
        <Chip
          mode="outlined"
          style={styles.streak}
          textStyle={styles.streakText}
        >
          2
        </Chip>
      </View>
      <View style={styles.sep} />
      <View>
        <Text style={styles.tip}>Most Viewed Apps</Text>
      </View>
      <View style={styles.viewedAppOuter}>
        <View style={styles.viewedApp}>
          <Text style={styles.viewedAppText}>
            <FontAwesome name="whatsapp" size={17} color="green" /> WhatsApp
          </Text>
          <Text>6 hrs</Text>
        </View>
        <View style={styles.viewedApp}>
          <Text style={styles.viewedAppText}>
            <Entypo name="facebook" size={17} color="blue" /> FaceBook
          </Text>
          <Text>3 hrs</Text>
        </View>
        <View style={styles.viewedApp}>
          <Text style={styles.viewedAppText}>
            <Entypo name="youtube" size={17} color="red" /> YouTube
          </Text>
          <Text>2 hrs</Text>
        </View>
      </View>
    </View>
  );
};
export default Home;
