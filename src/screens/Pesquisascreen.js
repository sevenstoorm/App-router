import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

const jogos = [
  {
    id: 1,
    nome: "GTA VI",
    genero: "Ação / Aventura",
    nota: "9.1",
    duracao: "49h 30min",
    imagem:
      "https://www.adrenaline.com.br/wp-content/uploads/2024/08/GTA-6-ja-tem-janela-de-lancamento-definida-afirma-Take-Two-01-912x569.jpg",
  },
  {
    id: 2,
    nome: "CyberPunk 2077",
    genero: "RPG / Ação",
    nota: "8.8",
    duracao: "70h 15min",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png",
  },
  {
    id: 3,
    nome: "Fallout New Vegas",
    genero: "RPG",
    nota: "9.8",
    duracao: "60h 45min",
    imagem:
      "https://static.wikia.nocookie.net/fallout/images/f/ff/FNV_box_art_%28US%29.jpg/revision/latest?cb=20230813031307",
  },
  {
    id: 4,
    nome: "DMC 3",
    genero: "H&S",
    nota: "9.3",
    duracao: "32h 10min",
    imagem:
      "https://static.wikia.nocookie.net/devilmaycry/images/8/8a/Img_dmc3_dante_awakening_special_edition_capa.jpg/revision/latest/scale-to-width-down/985?cb=20210413004944&path-prefix=pt-br",
  },
];

export default function PesquisaScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const jogosFiltrados = jogos.filter((jogo) =>
    jogo.nome.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Pesquisa</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar jogos..."
          placeholderTextColor="#9CA3AF"
          value={searchText}
          onChangeText={setSearchText}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {jogosFiltrados.length > 0 ? (
        jogosFiltrados.map((jogo) => (
          <Pressable
            key={jogo.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("Detalhes", {
                screen: "Descricao",
                params: { jogo },
              })
            }
          >
            <Image source={{ uri: jogo.imagem }} style={styles.poster} />
            <View style={styles.info}>
              <Text style={styles.movieTitle}>{jogo.nome}</Text>
              <Text style={styles.movieMeta}>{jogo.genero}</Text>
              <View style={styles.row}>
                <Text style={styles.badge}>Nota {jogo.nota}</Text>
                <Text style={styles.duration}>{jogo.duracao}</Text>
              </View>
            </View>
          </Pressable>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Nenhum jogo encontrado para "{searchText}"
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    color: "#17202A",
    fontSize: 32,
    fontWeight: "800",
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    color: "#111827",
  },
  card: {
    flexDirection: "row",
    marginBottom: 14,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  poster: {
    width: 96,
    minHeight: 142,
    backgroundColor: "#E5E7EB",
  },
  info: {
    flex: 1,
    justifyContent: "center",
    padding: 14,
  },
  movieTitle: {
    marginBottom: 6,
    color: "#111827",
    fontSize: 18,
    fontWeight: "800",
  },
  movieMeta: {
    marginBottom: 12,
    color: "#6B7280",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  badge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FEF3C7",
    color: "#92400E",
    fontSize: 13,
    fontWeight: "700",
  },
  duration: {
    color: "#4B5563",
    fontSize: 13,
  },
  emptyContainer: {
    marginTop: 80,
    alignItems: "center",
  },
  emptyText: {
    color: "#6B7280",
    fontSize: 16,
    textAlign: "center",
  },
});
