import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

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
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{
                  uri: image,
                }}
              />
              <TouchableOpacity
                style={styles.adoptButton}
                onPress={() => Alert.alert("Thank you for adopting this dog")}
              >
                <Text style={styles.adoptButtonText}>ADOPT</Text>
              </TouchableOpacity>
            </View>
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
    alignItems: "flex-start", // if you want to fill rows left to right},
  },
  item: {
    width: "50%",
    height: 180,
    alignItems: "center",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 150,
  },
  adoptButton: {
    width: "50%",
    marginTop: 4,
    borderRadius: 30,
    backgroundColor: "#f35764",
    alignItems: "center",
  },
  adoptButtonText: {
    color: "#F9F9F9",
  },
});

export default HomeScreen;
