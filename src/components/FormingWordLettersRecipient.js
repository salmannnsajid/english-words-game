import { useGameStore } from "../store/store";

export const FormingWordLettersRecipient = () => {
  const { selectedLetters, resetError, error } = useGameStore();

  return (
    <div>
      <h1 className="mb-1 text-white font-bold text-center">Forming word:</h1>
      <div className="formingWordLettersRecipient flex items-center justify-center p-3 bg-white rounded text-center">
        {selectedLetters.map((letter, index) => (
          <span key={index}>{letter.value}</span>
        ))}

        {error !== null ? (
          <div className="flex bg-red-500 p-2 rounded text-white">
            <i className="bi bi-x-circle-fill mr-1" onClick={resetError} />
            <p>{error}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
