import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  Pressable,
} from "react-native";

export default function Configuracoes({ navigation }) {
  const [notificacoes, setNotificacoes] = useState(true);
  const [modoEscuro, setModoEscuro] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>

      <View style={styles.card}>
        <Text style={styles.secao}>Preferências</Text>

        <View style={styles.item}>
          <Text style={styles.texto}>Receber notificações</Text>
          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.texto}>Modo escuro</Text>
          <Switch
            value={modoEscuro}
            onValueChange={setModoEscuro}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.secao}>Conta</Text>

        <Pressable style={styles.botao}>
          <Text style={styles.botaoTexto}>Editar Perfil</Text>
        </Pressable>

        <Pressable style={styles.botao}>
          <Text style={styles.botaoTexto}>Alterar Senha</Text>
        </Pressable>

        <Pressable style={styles.botao}>
          <Text style={styles.botaoTexto}>Gerenciar Assinatura</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.secao}>Suporte</Text>

        <Pressable style={styles.botao}>
          <Text style={styles.botaoTexto}>Central de Ajuda</Text>
        </Pressable>

        <Pressable style={styles.botao}>
          <Text style={styles.botaoTexto}>Sobre o Aplicativo</Text>
        </Pressable>
      </View>

      <Pressable style={styles.logout}>
        <Text style={styles.logoutTexto}>Sair da Conta</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 20,

    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  secao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7E22CE",
    marginBottom: 15,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  texto: {
    fontSize: 16,
    color: "#374151",
  },

  botao: {
    backgroundColor: "#F3F4F6",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },

  botaoTexto: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "500",
  },

  logout: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 12,
    marginBottom: 30,
  },

  logoutTexto: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});