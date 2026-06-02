import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ContaScreen = () => {
  const planoAtual = {
    nome: "Premium Gamer",
    preco: "R$ 59,90",
    descricao: "Acesso completo ao catálogo de jogos",
    proximaCobranca: "30/06/2026",
    status: "Ativo",
  };

  const handleAlterarSenha = () => {
    Alert.alert(
      "Alterar Senha",
      "Aqui você pode alterar sua senha de acesso.",
    );
  };

  const handleExcluirConta = () => {
    Alert.alert(
      "Excluir Conta",
      "Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => Alert.alert("Conta Excluída", "Sua conta foi excluída com sucesso."),
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <View style={styles.header}>
        <Text style={styles.title}>Conta</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações da Conta</Text>

        <View style={styles.infoItem}>
          <Ionicons name="mail-outline" size={24} color="#BB86FC" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>jogador@example.com</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="calendar-outline" size={24} color="#BB86FC" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Membro desde</Text>
            <Text style={styles.value}>Março de 2025</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plano Premium</Text>

        <View style={styles.planCard}>
          <View style={styles.planHeader}>
            <Text style={styles.planName}>{planoAtual.nome}</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{planoAtual.status}</Text>
            </View>
          </View>

          <Text style={styles.price}>
            {planoAtual.preco} <Text style={styles.period}>/mês</Text>
          </Text>

          <Text style={styles.nextBilling}>
            Próxima cobrança: {planoAtual.proximaCobranca}
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Gerenciar Assinatura</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Segurança</Text>

        <TouchableOpacity style={styles.optionItem} onPress={handleAlterarSenha}>
          <Ionicons name="lock-closed-outline" size={24} color="#E0E0E0" />
          <Text style={styles.optionText}>Alterar Senha</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacidade</Text>

        <TouchableOpacity style={styles.optionItem}>
          <Ionicons name="eye-outline" size={24} color="#E0E0E0" />
          <Text style={styles.optionText}>Perfil visível para todos</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Ionicons name="list-outline" size={24} color="#E0E0E0" />
          <Text style={styles.optionText}>Lista de jogos privada</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Ionicons name="notifications-outline" size={24} color="#E0E0E0" />
          <Text style={styles.optionText}>Notificações</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={[styles.optionItem, { borderBottomWidth: 0 }]}> 
          <Ionicons name="help-circle-outline" size={24} color="#E0E0E0" />
          <Text style={styles.optionText}>Central de Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} onPress={handleExcluirConta}>
          <Ionicons name="trash-outline" size={24} color="#FF5252" />
          <Text style={[styles.optionText, { color: '#FF5252' }]}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#BB86FC',
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 16,
  },
  label: {
    fontSize: 14,
    color: '#888',
  },
  value: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  planCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  planName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statusBadge: {
    backgroundColor: '#03DAC6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  period: {
    fontSize: 16,
    color: '#888',
  },
  nextBilling: {
    color: '#AAAAAA',
    marginVertical: 12,
  },
  button: {
    backgroundColor: '#BB86FC',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 18,
    borderRadius: 12,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#E0E0E0',
  },
  logoutButton: {
    margin: 20,
    backgroundColor: '#FF5252',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default ContaScreen;
