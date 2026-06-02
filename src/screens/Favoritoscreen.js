import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const favoritos = [
  {
    id: 1,
    titulo: "Interesletar",
    genero: "Ficção científica",
    nota: "9.5",
    duração: "2h 49m",
    imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },

  {
    id: 3,
    titulo: "Homem-Aranha no Aranhaverso",
    genero: "Animação",
    nota: "8.7",
    duracao: "1h 57min",
    imagem: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
  },

];


export default function Favoritoscreen({ navigation }){
  return(
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <view style={styles.header}>
         <text style={styles.title}>Favoritos</text>
         </view>


         {favoritos.lenght > 0 ? (
          favoritos.map((filme) => (
            <Pressable
            key={filme.id}
            style={styles.card}
            onPress={() => navigation.navigate("Detalhes", {filme})}>
              <image source={{ uri: filme.imagem}} style={styles.poster}/>
              <view style={styles.info}>
                <text  style={styles.movieTitle}>{filme.titulo}</text>
                <Text style={styles.movieMeta}>{filme.genero}</Text>
              <View style={styles.row}>
                <Text style={styles.badge}>Nota {filme.nota}</Text>
                <Text style={styles.duration}>{filme.duracao}</Text>
              </View>
              </view>
            </Pressable>
          ))
         ) : (
            <view style={styles.emptyContainer}>
              <text style={styles.emptyText}>Você ainda não tem filmes favoritos</text>
            </view>
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
  // Estado vazio
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  emptyText: {
    color: "#6B7280",
    fontSize: 16,
    textAlign: "center",
  },
});