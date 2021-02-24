import * as React from "react";
import GlobalStyles from "./GlobalStyles";
import { SafeAreaView } from "react-native";
import Screens from "./Screens";

function MyTabs() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Screens />
    </SafeAreaView>
  );
}

export default MyTabs;
