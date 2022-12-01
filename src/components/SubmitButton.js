import { useGameStore } from "../store/store";

export const SubmitButton = () => {
  const {
    error,
    matchWords,
    guessedWords,
    selectedLetters,
    guessingAttempts,
    setError,
    setGuessedWords,
    setSelectedLetters,
    setGuessingAttempts,
  } = useGameStore();

  const handleClickMergeLetters = () => {
    let lettersValues = [];
    selectedLetters.forEach((letter) => lettersValues.push(letter.value));
    let formedWord = lettersValues.join("");

    if (matchWords.includes(formedWord)) {
      if (guessedWords.includes(formedWord)) {
        setSelectedLetters([]);
        setError("Word already guessed!");
        setGuessingAttempts(guessingAttempts + 1);
      } else {
        setError(null);
        setSelectedLetters([]);
        setGuessedWords([...guessedWords, formedWord]);
      }
    } else {
      setSelectedLetters([]);
      setError("Incorrect word!");
      setGuessingAttempts(guessingAttempts + 1);
    }
  };

  return (
    <>
      <button
        onClick={handleClickMergeLetters}
        disabled={error ? true : false}
        className={`w-full p-2 mt-3 bg-white rounded ${
          error ? "btnDisabled" : ""
        }`}
      >
        Submit
      </button>
    </>
  );
};
