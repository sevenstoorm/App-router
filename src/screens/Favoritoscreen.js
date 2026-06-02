import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useFavorites } from "./FavoritesContext";

export default function FavoritosScreen({ navigation }) {
  const { favoritos, removerFavorito } = useFavorites();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Favoritos</Text>
      </View>

      {favoritos.length > 0 ? (
        favoritos.map((filme) => (
          <Pressable
            key={filme.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("Descricao", { filme })
            }
          >
            <Image
              source={{ uri: filme.imagem }}
              style={styles.poster}
            />

            <View style={styles.info}>
              <Text style={styles.movieTitle}>
                {filme.titulo}
              </Text>

              <Text style={styles.movieMeta}>
                {filme.genero}
              </Text>

              <View style={styles.row}>
                <Text style={styles.badge}>
                  Nota {filme.nota}
                </Text>

                <Text style={styles.duration}>
                  {filme.duracao}
                </Text>
              </View>

              <Pressable
                onPress={() => removerFavorito(filme.id)}
                style={styles.removeButton}
              >
                <Text style={styles.removeText}>
                  Remover
                </Text>
              </Pressable>
            </View>
          </Pressable>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Você ainda não tem filmes favoritos
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
    marginBottom: 18,
  },
  title: {
    marginBottom: 8,
    color: "#17202A",
    fontSize: 32,
    fontWeight: "800",
  },
  card: {
    flexDirection: "row",
    marginBottom: 14,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
  },
  poster: {
    width: 96,
    minHeight: 142,
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
  removeButton: {
    marginTop: 10,
  },
  removeText: {
    color: "red",
    fontWeight: "bold",
  },
  emptyContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  emptyText: {
    color: "#6B7280",
    fontSize: 16,
  },
});