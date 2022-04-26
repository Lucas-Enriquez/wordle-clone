import { useContext, useEffect } from "react"
import { BoardContext } from "../context/BoardContext";



export const Letter = ({letterPos, attemptNumber}) => {

    const { board, correctWord, currAttempt, setDisabledLetters } = useContext(BoardContext)
    const letter = board[attemptNumber][letterPos];
    
    const correct = correctWord[letterPos] === letter;

    const almost = !correct && letter !== '' && correctWord.includes(letter);
    
    const letterState = currAttempt.attempt > attemptNumber ? (correct ? 'correctLetter' : almost ? 'wrongPlace' : 'nonExistingLetter') : undefined;

    useEffect(()=> {
      if(letter !== '' && (correct || almost)) {
        setDisabledLetters((prev) => [...prev, letter]);
      }
      
    }, [currAttempt.attempt])


  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}
