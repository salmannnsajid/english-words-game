import React from "react";

export const HowToPlay = ({ revealHelp, setRevealHelp }) => {
  return (
    <>
      <div
        className={`howToSection flex flex-col mt-6 bg-white p-2 rounded transition ease-in-out`}
        style={{ maxWidth: "500px" }}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-900">How to play: </h1>
          <i
            title="Click to reveal"
            onClick={() => setRevealHelp(!revealHelp)}
            className={`bi bi-chevron-${
              revealHelp ? "up" : "down"
            } bg-cyan-600 text-white rounded p-1 hover:cursor-pointer `}
          />
        </div>

        {revealHelp ? (
          <>
            <hr className="my-2" />
            <p>
              Rearrange the letters to form as many words of three or more
              letters as you can.
            </p>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
