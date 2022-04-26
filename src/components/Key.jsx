import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";




export const Key = ({ keycap, disabled }) => {

    const { onBackSpace, onEnter, onAnyKey } = useContext(BoardContext);

    const handleClick = ()=> {
        if(keycap === 'enter') {
            onEnter()
        } 
        else if(keycap === 'delete') {
            onBackSpace();
        }
        else {
            onAnyKey(keycap)
        }
      }

  return (
    <div onClick={handleClick} id={disabled ? 'disabled' : undefined} className='keycap'>{keycap.toUpperCase()}</div>
  )
}
