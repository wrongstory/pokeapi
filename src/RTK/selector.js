import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );

export const selectPokemonByRegExp = (reg) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );
