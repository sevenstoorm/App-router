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

import { useFavorites } from "./FavoritesContext";

const Descricao = ({ route, navigation }) => {
  const jogo = route?.params?.jogo;
  const { adicionarFavorito, isFavorito } = useFavorites();

  if (!jogo) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Nenhum jogo foi selecionado. Volte para a tela anterior e tente
          novamente.
        </Text>
        <Pressable
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={28} color="#000" />
        </Pressable>
      </View>
    );
  }

  const jaEhFavorito = isFavorito(jogo.id);

  const handleFavoritar = () => {
    if (jaEhFavorito) {
      alert("Este jogo já está nos favoritos!");
    } else {
      adicionarFavorito(jogo);
      alert("✅ Jogo adicionado aos favoritos!");
    }
  };

  const sinopses = {
    1: "Em GTA VI, os jogadores mergulham em um mundo aberto vibrante e dinâmico, explorando uma cidade fictícia inspirada em Miami. Com uma narrativa envolvente, personagens complexos e uma variedade de missões, o jogo oferece uma experiência imersiva de ação e aventura, onde os jogadores podem se envolver em atividades criminosas, personalizar seus personagens e explorar um ambiente repleto de detalhes e interações.",
    2: "CyberPunk 2077 é um RPG de ação ambientado em um futuro distópico na cidade de Night City. Os jogadores assumem o papel de V, um mercenário personalizável, e embarcam em uma jornada para se tornar uma lenda urbana. Com uma narrativa ramificada, escolhas significativas e um mundo aberto vibrante, o jogo oferece uma experiência imersiva repleta de tecnologia avançada, gangues perigosas e conspirações corporativas.",
    3: "Fallout New Vegas é um RPG de ação ambientado em um cenário pós-apocalíptico no deserto de Mojave. Os jogadores assumem o papel de um mensageiro que é deixado para morrer, mas sobrevive e embarca em uma jornada para encontrar o responsável por sua situação. Com uma narrativa ramificada, escolhas morais significativas e um mundo aberto repleto de facções, o jogo oferece uma experiência imersiva onde os jogadores podem explorar ruínas, interagir com personagens únicos e moldar o destino do Mojave.",
    4: "DMC 3 é um jogo de ação e hack and slash que segue a história de Dante, um caçador de demônios, enquanto ele enfrenta seu irmão gêmeo Vergil e uma série de inimigos demoníacos. Com combates rápidos e fluidos, o jogo oferece uma experiência intensa e estilizada, onde os jogadores podem usar uma variedade de armas e habilidades para derrotar hordas de inimigos e chefes desafiadores em um cenário gótico e sombrio.",
  };

  const sinopse = sinopses[jogo.id];

  return (
    <View style={styles.container}>
      <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#000" />
      </Pressable>

      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          <Image source={{ uri: jogo.imagem }} style={styles.poster} />

          <Text style={styles.title}>{jogo.nome}</Text>

          <Text style={styles.info}>
            {jogo.genero} {jogo.duracao}
          </Text>
          <Text style={styles.nota}>Nota: {jogo.nota}</Text>

          <Text style={styles.sectionTitle}>Sinopse</Text>
          <Text style={styles.sinopse}>{sinopse}</Text>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Trailer", { jogo })}
          >
            <Text style={styles.buttonText}>Ver Trailer</Text>
          </Pressable>

          <Pressable style={styles.favoriteButton} onPress={handleFavoritar}>
            <Ionicons
              name={jaEhFavorito ? "heart" : "heart-outline"}
              size={22}
              color="#fff"
              style={{ marginRight: 8 }}
            />
            <Text style={styles.favoriteText}>
              {jaEhFavorito ? "Já é Favorito" : "Favoritar"}
            </Text>
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
  errorText: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    padding: 20,
    color: "#333",
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