import { View, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import AdoptDogCard from "../components/adoptDogCard";
function HomeScreen() {
  const [data, setData] = useState({ img: [], isLoading: true });

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://dog.ceo/api/breeds/image/random/20");
      let responseJson = await response.json();
      setData({ img: responseJson.message, isLoading: false });
    };
    fetchData();
  }, []);

  return data.isLoading === true ? (
    <View style={{ flex: 1, padding: 20 }}>
      <ActivityIndicator />
    </View>
  ) : (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.gridContainer}>
          {data.img.map((image) => (
            <AdoptDogCard image={image} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default HomeScreen;
