import { useGameStore } from "../store/store";

export const GuessedWordsRecipient = () => {
  const { guessedWords } = useGameStore();

  return (
    <>
      <h1 className="mt-2 mb-1 font-bold text-white">Guessed words:</h1>
      <div className="guessedWordsRecipient flex flex-col bg-white">
        {guessedWords.map((word, index) => (
          <div key={index} className="guessedWord m-2 p-1 bg-slate-300">
            <span>{word}</span>
          </div>
        ))}
      </div>
    </>
  );
};
