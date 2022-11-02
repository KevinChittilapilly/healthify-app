import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import FooterStyle from "../styles/FooterStyle";
import DailyReport from "../screens/DailyReport";
import Home from "../screens/Home";
import Goals from "../screens/Goals";
import Insights from "../screens/Insights";

const MusicRoute = () => <Home />;

const AlbumsRoute = () => <DailyReport />;

const RecentsRoute = () => <Goals/>;

const NotificationsRoute = () => <Insights/>;

const Footer = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "music", title: "Home", icon: "home" },
    { key: "albums", title: "Daily Progress", icon: "graph" },
    { key: "recents", title: "My Goals", icon: "check" },
    { key: "notifications", title: "Insights", icon: "eye" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      compact={true}
      barStyle={FooterStyle.bottomFooter}
      labeled
      shifting={false}
      activeColor={"orange"}
    />
  );
};

export default Footer;
