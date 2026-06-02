import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Descricao = ({ route, navigation }) => {
  const { filme } = route.params;

  const sinopses = {
    1: "Em um futuro onde a Terra está se tornando inabitável, um ex-piloto da NASA lidera uma missão através de um buraco de minhoca no espaço para encontrar um novo lar para a humanidade. Enquanto explora planetas distantes, ele enfrenta desafios científicos e emocionais ligados ao tempo e à sua família.",
    2: "Dom Cobb é um especialista em invadir sonhos para roubar informações. Recebendo uma última missão, ele precisa realizar o impossível: implantar uma ideia na mente de alguém sem que a pessoa perceba. Para isso, sua equipe mergulha em camadas cada vez mais profundas de sonhos.",
    3: "Miles Morales ganha poderes semelhantes aos do Homem-Aranha e descobre a existência de múltiplos universos. Quando uma ameaça coloca todas as dimensões em risco, ele se une a diferentes versões do Homem-Aranha para salvar o multiverso e encontrar seu próprio caminho como herói.",
    4: "Paul Atreides, herdeiro de uma poderosa família nobre, viaja para o planeta desértico Arrakis, a única fonte da substância mais valiosa do universo. Em meio a conspirações políticas, guerras e profecias, ele precisa decidir seu destino e o futuro de seu povo.",
  };

  const sinopse = sinopses[filme.id];

  return (
    <View style={styles.container}>

      <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#000" />
      </Pressable>

      <ScrollView style={styles.scroll}>
        <View style={styles.content}>

          <Image source={{ uri: filme.imagem }} style={styles.poster} />

          <Text style={styles.title}>{filme.titulo}</Text>

          <Text style={styles.info}>
            {filme.genero} {filme.duracao}
          </Text>
          <Text style={styles.nota}>Nota: {filme.nota}</Text>

          <Text style={styles.sectionTitle}>Sinopse</Text>
          <Text style={styles.sinopse}>{sinopse}</Text>

          <Pressable style={styles.button} onPress={() => navigation.navigate("Trailer", { filme })}>
            <Text style={styles.buttonText}>Ver Trailer</Text>
          </Pressable>

          <Pressable style={styles.favoriteButton} onPress={() => alert("filme favoritado")}>
            <Text style={styles.favoriteText}>Favoritar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  content: {
    padding: 20,
  },
  poster: {
    width: 160,
    height: 220,
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#111",
  },
  info: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
    color: "#434242",
  },
  nota: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    color: "#434242",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000000",
    alignSelf: "center",
  },
  sinopse: {
    fontSize: 15,
    color: "#515151",
    marginBottom: 30,
    alignSelf: "center",
    maxWidth: 600,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#139fe4",
    padding: 16,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    maxWidth: 200,
    marginLeft: 630,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  favoriteButton: {
    borderColor: "#000000",
    backgroundColor: "#000000",
    padding: 16,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 200,
    marginLeft: 630,
  },
  favoriteText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default Descricao;