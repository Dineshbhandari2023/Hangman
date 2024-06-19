import { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [gussedLetters, setGussedLetters] = useState<string[]>([]);

  const incorrectLetters = gussedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord gussedLetters={gussedLetters} wordToGuess={wordToGuess} />
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
