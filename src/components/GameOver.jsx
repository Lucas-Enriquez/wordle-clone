import { useContext } from "react"
import { BoardContext } from "../context/BoardContext"

export const GameOver = () => {

    const {gameOver, setGameOver, correctWord, currAttempt} = useContext(BoardContext)

  return (
    <div className="game-over">
        <h3>{gameOver.guessedWord ? 'You correctly guessed' : 'You failed'}</h3>
        <h1>Correct: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}
