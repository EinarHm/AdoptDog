import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";

function HomeScreen() {
  const [data, setData] = useState({ img: [], isLoading: true });

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://dog.ceo/api/breeds/image/random/8");
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
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {data.img.map((image) => (
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
            <Text>Guardar</Text>
          </View>
        ))}
      </View>
    </View>
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
    alignItems: "flex-start", // if you want to fill rows left to right},
  },
  item: {
    width: "50%",
    height: 150,

    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
  },
});

export default HomeScreen;
