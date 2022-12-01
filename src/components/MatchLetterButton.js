import { useState, useEffect } from "react";
import { useGameStore } from "../store/store";

export const MatchLetterButton = ({ letter }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { matchLetters, setSelectedLetters, selectedLetters, error } =
    useGameStore();

  useEffect(() => {
    if (selectedLetters.includes(letter)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [letter, selectedLetters]);

  const handleClickLetterBtn = (e) => {
    const id = Number(e.target.value);
    let letter = matchLetters.find((letter) => letter.id === id);

    if (!selectedLetters.includes(letter)) {
      setSelectedLetters([...selectedLetters, letter]);
    } else {
      const index = selectedLetters.findIndex((letter) => letter.id === id);
      const updatedSelectedLetters = [...selectedLetters];

      updatedSelectedLetters.splice(index, 1);
      setSelectedLetters(updatedSelectedLetters);
    }
  };

  return (
    <button
      value={letter.id}
      onClick={(e) => handleClickLetterBtn(e)}
      disabled={error ? true : false}
      className={`matchLetter transition ease-in-out text-white
        ${isSelected ? "bg-cyan-800" : "bg-cyan-500"}
        ${error ? "letterDisabled" : ""}`}
    >
      {letter.value}
    </button>
  );
};
