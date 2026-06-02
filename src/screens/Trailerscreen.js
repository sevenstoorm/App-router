import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Trailerscreen = ({ route, navigation }) => {
  const { filme } = route.params;

  const trailers = {
    1: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    2: "https://www.youtube.com/watch?v=YoHD9XEInc0", 
    3: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ",
    4: "https://www.youtube.com/watch?v=n9xhJrPXOp4",
  };

  const trailerUrl = trailers[filme.id];

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#000000" />
        </Pressable>
        <Text style={styles.title}>Trailer {filme.titulo}</Text>
      </View>

      <View style={styles.content}>

        <Text style={styles.movieTitle}>{filme.titulo}</Text>
        <Text style={styles.genero}>
          {filme.genero} {filme.duracao}
        </Text>

        <Text style={styles.descricao}>
          Toque no botão abaixo para assistir ao trailer no YouTube
        </Text>

        <Pressable style={styles.trailerButton} onPress={() => Linking.openURL(trailerUrl)}>
          <Text style={styles.trailerButtonText}>Assistir trailer</Text>
        </Pressable>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  movieTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#000000",
    textAlign: "center",
    marginBottom: 12,
  },
  genero: {
    fontSize: 17,
    color: "#000000",
    marginBottom: 30,
    textAlign: "center",
  },
  descricao: {
    fontSize: 16,
    color: "#343434",
    textAlign: "center",
    marginBottom: 40,
  },
  trailerButton: {
    backgroundColor: "#1975c0",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 16,
    width: 300,
  },
  trailerButtonText: {
    color: "#FFF",
    fontSize: 20,
  },

});

export default Trailerscreen;