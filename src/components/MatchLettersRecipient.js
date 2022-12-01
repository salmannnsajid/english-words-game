import { useGameStore } from "../store/store";
import { MatchLetterButton } from "./MatchLetterButton";

export const MatchLettersRecipient = () => {
  const { matchLetters } = useGameStore();
  return (
    <>
      <div className="matchLettersRecipient grid grid-cols-3 grid-rows-2 gap-4">
        {matchLetters.map((letter, index) => (
          <MatchLetterButton letter={letter} key={index} />
        ))}
      </div>
    </>
  );
};
