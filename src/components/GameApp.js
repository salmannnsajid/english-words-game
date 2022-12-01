import { useEffect, useState } from "react";
import { useGameStore } from "../store/store";
import { FormingWordLettersRecipient } from "./FormingWordLettersRecipient";
import { GuessedWordsRecipient } from "./GuessedWordsRecipient";
import { MatchLettersRecipient } from "./MatchLettersRecipient";
import { StatsChart } from "./StatsChart";
import { SubmitButton } from "./SubmitButton";
import { gameLetters } from "../utils/letters";
import { gameWords } from "../utils/words";
import { HowToPlay } from "./HowToPlay";

export const GameApp = () => {
  const [revealHelp, setRevealHelp] = useState(false);
  const [allWordsGuessed, setAllWordsGuessed] = useState(false);

  const {
    clueWord,
    matchWords,
    clueCounter,
    guessedWords,
    setError,
    setClueWord,
    setMatchWords,
    setClueCounter,
    setMatchLetters,
    setGuessedWords,
    setSelectedLetters,
    setGuessingAttempts,
  } = useGameStore();

  const handleClueBtn = () => {
    if (clueCounter > 0) {
      let randInt = Math.floor(Math.random() * matchWords.length);

      if (guessedWords.includes(matchWords[randInt])) {
        randInt -= 1;
        setClueWord(matchWords[randInt]);
      } else {
        setClueWord(matchWords[randInt]);
      }
      setClueCounter(clueCounter - 1);
    }
  };

  const setMatch = () => {
    setMatchLetters([]);
    setMatchWords([]);
    setGuessedWords([]);
    setSelectedLetters([]);
    setGuessingAttempts(0);
    setClueCounter(3);
    setClueWord(null);
    setError(null);

    const randInt = Math.floor(Math.random() * gameLetters.length);
    let objectLetters = [];
    gameLetters[randInt].forEach((letter, index) => {
      objectLetters.push({ id: index, value: letter });
    });

    setMatchLetters(objectLetters);

    let upperCasedWords = [];
    gameWords[randInt].forEach((word) => {
      upperCasedWords.push(word.toUpperCase());
    });

    setMatchWords(upperCasedWords);
  };

  useEffect(() => {
    setMatch();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <main className="flex flex-col pb-3">
        <div className="flex flex-col items-center w-full pb-6 text-white">
          <h2 className="text-2xl font-bold">English Words Minigame</h2>
          <h3 className="text-base">by Salman Sajid</h3>
          <ul className="flex">
            <li className="mr-2">
              <a
                target="_blank"
                rel="noreferrer"
                title="Github profile"
                href="https://www.github.com/salmannnsajid"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>

        {allWordsGuessed ? (
          <>
            <div className="mb-3 self-center">
              <button
                onClick={setMatch}
                className="p-2 bg-green-500 text-white rounded"
              >
                <i className="bi bi-plus" />
                Play new match
              </button>
            </div>
            <StatsChart />
          </>
        ) : (
          <>
            <div className="statsSection flex flex-col">
              <div className="flex flex-col mt-2 ">
                <div className="flex justify-center mt-2">
                  <button
                    onClick={handleClueBtn}
                    className="w-35 p-2 text-white bg-cyan-500  rounded"
                  >
                    <i className="bi bi-search" /> Get Clue {clueCounter} / 3
                  </button>
                  {clueWord ? (
                    <p className="ml-3 p-2 rounded bg-white text-center">
                      <i className="bi bi-chat-text" /> {clueWord}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="gameplaySection flex justify-between">
              <div className="sectionA flex flex-col mr-6">
                <GuessedWordsRecipient />
              </div>

              <div className="sectionB flex flex-col justify-around">
                <FormingWordLettersRecipient />
                <MatchLettersRecipient />
                <SubmitButton setAllWordsGuessed={setAllWordsGuessed} />
              </div>
            </div>

            <HowToPlay revealHelp={revealHelp} setRevealHelp={setRevealHelp} />
          </>
        )}
      </main>
    </>
  );
};
