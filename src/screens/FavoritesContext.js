import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (filme) => {
    setFavoritos((atual) => {
      if (atual.some((f) => f.id === filme.id)) return atual;
      return [...atual, filme];
    });
  };

  const removerFavorito = (id) => {
    setFavoritos((atual) => atual.filter((filme) => filme.id !== id));
  };

  const isFavorito = (id) => favoritos.some((filme) => filme.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favoritos, adicionarFavorito, removerFavorito, isFavorito }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);