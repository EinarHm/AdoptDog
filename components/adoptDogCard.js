import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import React from "react";
function adoptDogCard(props) {
  return (
    <View style={styles.item} key={props.image}>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <TouchableOpacity
        style={styles.adoptButton}
        onPress={() => Alert.alert("Thank you for adopting this dog")}
      >
        <Text style={styles.adoptButtonText}>ADOPT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
export default adoptDogCard;
