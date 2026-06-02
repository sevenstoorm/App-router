import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (jogo) => {
    setFavoritos((atual) => {
      if (atual.some((f) => f.id === jogo.id)) return atual;
      return [...atual, jogo];
    });
  };

  const removerFavorito = (id) => {
    setFavoritos((atual) => atual.filter((jogo) => jogo.id !== id));
  };

  const isFavorito = (id) => favoritos.some((jogo) => jogo.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favoritos, adicionarFavorito, removerFavorito, isFavorito }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
