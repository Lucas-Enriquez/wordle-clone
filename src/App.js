import { useEffect, useState } from "react";
import "./App.css";
import { BoardGrid } from "./components/gameboard/BoardGrid";
import { Keyboard } from "./components/gameboard/Keyboard";
import { GameOver } from "./components/GameOver";
import { boardDefault, generateWordSet } from "./components/helper/Words";
import { NavBar } from "./components/ui/NavBar";
import { BoardContext } from "./context/BoardContext";

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const { attempt, letterPos } = currAttempt;
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState('');
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});
  const [existingWord, setExistingWord] = useState({exists: true});

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord.toUpperCase());
    });
  }, []);

  useEffect(()=> {
    if(existingWord.exists === false) {
      setTimeout(() => {
        setExistingWord({exists: true})
      }, 1000);
    }
  }, [existingWord])

  const onAnyKey = (keycap) => {
    const newBoard = [...board];
    if (letterPos < 5) {
      newBoard[attempt][letterPos] = keycap.toUpperCase();
      setBoard(newBoard);
      setCurrAttempt({ attempt: attempt, letterPos: letterPos + 1 });
    }
  };

  const onBackSpace = () => {
    if (board[attempt].length < 6 && board[attempt].length === 5) {
      board[attempt][letterPos - 1] = "";
      setCurrAttempt({ attempt: attempt, letterPos: letterPos - 1 });
    }
  };

  const onEnter = () => {
    if (letterPos !== 5) return;

    let typedWord = board[attempt].join("");

    if (wordSet.has(typedWord.toLowerCase())) {
      setCurrAttempt({ attempt: attempt + 1, letterPos: 0 });
      setExistingWord({exists: true})
    } else {
      setExistingWord({exists: false})
      setGameOver({gameOver: false, guessedWord: false});
      return;
    }
    if (typedWord === correctWord) {
      setGameOver({gameOver: true, guessedWord: true});
      return;
    }
    if(currAttempt.attempt === 5 && existingWord.exists === true) {
      setGameOver({gameOver: true, guessedWord: false});
      return;
    }
  };

  return (
    <div className="App">
      <NavBar />
      <BoardContext.Provider
        value={{
          board,
          setBoard,
          attempt,
          currAttempt,
          setCurrAttempt,
          onAnyKey,
          onBackSpace,
          onEnter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          setGameOver,
          gameOver
        }}
      >
        <BoardGrid />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        {existingWord.exists === false && <div className="not-found animate__animated animate__bounceIn "><p>Word not found</p></div>}
      </BoardContext.Provider>
    </div>
  );
}

export default App;
