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

const filmes = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficção científica",
    nota: "9.1",
    duracao: "2h 49min",
    imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 2,
    titulo: "A Origem",
    genero: "Ação / suspense",
    nota: "8.8",
    duracao: "2h 28min",
    imagem: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 3,
    titulo: "Homem-Aranha no Aranhaverso",
    genero: "Animação",
    nota: "8.7",
    duracao: "1h 57min",
    imagem: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
  },
  {
    id: 4,
    titulo: "Duna",
    genero: "Aventura / fantasia",
    nota: "8.0",
    duracao: "2h 35min",
    imagem: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
];

export default function PesquisaScreen({ navigation }){
  const [searchText, setSearchText] = useState("");

  const filmesFiltrados = filmes.filter((filme) => filme.titulo.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <view style={styles.header}>
        <Text style={styles.title}>Pesquisa</Text>
      </view>

      <view style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar filmes..."
          placeholderTextColor="#9CA3AF"
          value={searchText}
          onChangeText={setSearchText}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </view>

      {filmesFiltrados.length > 0 ? (
        filmesFiltrados.map((filme) => (
          <Pressable
            key={filme.id}
            style={styles.card}
            onPress={() => navigation.navigate("Detalhes", { filme })}
          >
            <Image source={{ uri: filme.imagem }} style={styles.poster} />
            <View style={styles.info}>
              <Text style={styles.movieTitle}>{filme.titulo}</Text>
              <Text style={styles.movieMeta}>{filme.genero}</Text>
              <View style={styles.row}>
                <Text style={styles.badge}>Nota {filme.nota}</Text>
                <Text style={styles.duration}>{filme.duracao}</Text>
              </View>
            </View>
          </Pressable>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Nenhum filme encontrado para "{searchText}"
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