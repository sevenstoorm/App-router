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
    descricao: "Tenha acesso a 10 jogos por mês",
  },
  {
    id: 2,
    nome: "Padrão",
    preco: "R$ 39,90",
    descricao: "Tenha acesso a 30 jogos por mês",
  },
  {
    id: 3,
    nome: "Premium",
    preco: "R$ 59,90",
    descricao: "Tenha acesso ao nosso catálogo completo",
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
        Aproveite conteúdos exclusivos sem limites
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
            <Text style={styles.description}>{plano.descricao}</Text>

            <Text style={styles.info}>
              Aproveite conteúdos exclusivos e jogue onde quiser.
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
    backgroundColor: "#0A0A0A",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    color: "#4400ff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "#A1A1AA",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  cardsContainer: {
    gap: 18,
  },
  card: {
    backgroundColor: "#151515",
    borderWidth: 1.5,
    borderColor: "#4400ff",
    borderRadius: 16,
    padding: 22,
    alignItems: "center",
  },
  cardHeader: {
    backgroundColor: "#4400ff",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 16,
  },
  headerText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: "#FFF",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    color: "#A1A1AA",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  info: {
    color: "#777",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#4400ff",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",        
    fontSize: 17,
    fontWeight: "bold",
  },
});