import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

const PerfilScreen = () => {
  const jogoFavorito = {
    id: 1,
    nome: "GTA VI",
    genero: "Ação / Aventura",
    nota: "9.1",
    duracao: "49h 30min",
    imagem: "https://www.adrenaline.com.br/wp-content/uploads/2024/08/GTA-6-ja-tem-janela-de-lancamento-definida-afirma-Take-Two-01-912x569.jpg",
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      {/* Header do Perfil */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://preview.redd.it/does-subaru-have-any-sibling-v0-s9d49ujhwnzg1.jpeg?width=640&format=pjpg&auto=webp&s=8df3af0ac8030fe8c4cf5c39ac34abc325c7a404' }} 
          style={styles.fotoPerfil}
        />
        <Text style={styles.nome}>Daniel</Text>
        <Text style={styles.username}>@Daniel</Text>
      </View>

      {/* Descrição do Perfil */}
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>
          Happy birthday Daniel Did you really think i'd let this day pass quietly? I hope you have an amazing day filled with fun and games! 🎉🎮
        </Text>
      </View>

      {/* Card do Jogo Favorito */}
      <View style={styles.favoritoContainer}>
        <Text style={styles.tituloSecao}>🎮 Jogo Favorito</Text>
        
        <View style={styles.card}>
          <Image source={{ uri: jogoFavorito.imagem }} style={styles.cardImagem} />
          
          <View style={styles.cardInfo}>
            <Text style={styles.cardNome}>{jogoFavorito.nome}</Text>
            <Text style={styles.cardGenero}>{jogoFavorito.genero}</Text>
            
            <View style={styles.cardDetalhes}>
              <View style={styles.detalle}>
                <Text style={styles.detalleValor}>{jogoFavorito.nota}</Text>
                <Text style={styles.detalleLabel}>Nota</Text>
              </View>
              <View style={styles.detalle}>
                <Text style={styles.detalleValor}>{jogoFavorito.duracao}</Text>
                <Text style={styles.detalleLabel}>Duração</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Descriçãozinha do Perfil */}
      <View style={styles.descricaoExtra}>
        <Text style={styles.descricaoTitulo}>Sobre mim</Text>
        <Text style={styles.descricaoTexto}>
          Sou um entusiasta de jogos que adora explorar novos títulos e compartilhar minhas experiências com a comunidade.
          Acredito que os jogos são uma forma incrível de arte e entretenimento, e estou sempre em busca de novas aventuras virtuais para me perder.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#1E1E1E',
  },
  fotoPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#BB86FC',
    marginBottom: 12,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  username: {
    fontSize: 16,
    color: '#BB86FC',
    marginTop: 4,
  },
  bioContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  bio: {
    fontSize: 16,
    color: '#E0E0E0',
    textAlign: 'center',
    lineHeight: 24,
  },
  favoritoContainer: {
    padding: 20,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  cardImagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardInfo: {
    padding: 16,
  },
  cardNome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardGenero: {
    fontSize: 16,
    color: '#BB86FC',
    marginBottom: 12,
  },
  cardDetalhes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  detalhe: {
    alignItems: 'center',
  },
  detalheValor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#03DAC6',
  },
  detalheLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  descricaoExtra: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  descricaoTitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  descricaoTexto: {
    fontSize: 15,
    color: '#CCCCCC',
    lineHeight: 22,
  },
});

export default PerfilScreen;