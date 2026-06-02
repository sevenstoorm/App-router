import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

const planos = [
  {
    id: 1,
    nome: "Básico",
    preco: "R$ 19,90",
    descricao: "Assista em 1 dispositivo simultaneamente.",
  },
  {
    id: 2,
    nome: "Padrão",
    preco: "R$ 39,90",
    descricao: "Assista em até 2 dispositivos simultaneamente.",
  },
  {
    id: 3,
    nome: "Premium",
    preco: "R$ 59,90",
    descricao: "Assista em até 4 dispositivos simultaneamente.",
  },
];

export default function Assinatura({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Escolha seu Plano</Text>

      <Text style={styles.subtitle}>
        Aproveite filmes e séries sem limites
      </Text>

      <View style={styles.cardsContainer}>
        {planos.map((plano) => (
          <Pressable
            key={plano.id}
            style={styles.card}
            onPress={() => navigation.navigate("Pagamento")}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.headerText}>{plano.nome}</Text>
            </View>

            <Text style={styles.price}>{plano.preco}</Text>

            <Text style={styles.description}>
              {plano.descricao}
            </Text>

            <Text style={styles.info}>
              Aproveite conteúdos exclusivos e assista onde quiser.
            </Text>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Assinar</Text>
            </Pressable>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 25,
  },

  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  card: {
    width: "31%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    minHeight: 320,
    padding: 15,

    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  cardHeader: {
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 20,
  },

  headerText: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },

  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 15,
  },

  description: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 12,
  },

  info: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 18,
    flex: 1,
  },

  button: {
    backgroundColor: "#7E22CE",
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
});