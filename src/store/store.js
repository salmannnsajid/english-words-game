import create from "zustand";

export const initGameValues = {
  error: null,
  clueWord: null,
  clueCounter: 3,
  matchWords: [],
  matchLetters: [],
  guessedWords: [],
  selectedLetters: [],
  guessingAttempts: 0,
  guessimgAttempts: 0,
};

export const useGameStore = create((set) => ({
  ...initGameValues,
  setMatchLetters: (data) => set((state) => ({ ...state, matchLetters: data })),
  setMatchWords: (data) => set((state) => ({ ...state, matchWords: data })),
  setGuessedWords: (data) => set((state) => ({ ...state, guessedWords: data })),
  setClueCounter: (data) => set((state) => ({ ...state, clueCounter: data })),
  setClueWord: (data) => set((state) => ({ ...state, clueWord: data })),
  setGuessingAttempts: (data) =>
    set((state) => ({ ...state, guessingAttempts: data })),
  setSelectedLetters: (data) =>
    set((state) => ({ ...state, selectedLetters: data })),
  setError: (data) => set((state) => ({ ...state, error: data })),
  resetError: () => set((state) => ({ ...state, error: null })),
}));
