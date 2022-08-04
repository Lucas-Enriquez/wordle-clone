
import { useCallback, useContext, useEffect } from 'react';
import { BoardContext } from '../../context/BoardContext';
import { Key } from '../Key';

export const Keyboard = (props) => {

  const {onEnter, onBackSpace, onAnyKey, disabledLetters} = useContext(BoardContext);
  
  const line1 = ['q','w','e','r','t','y','u','i','o','p'];
  const line2 = ['a','s','d','f','g','h','j','k','l','n'];
  const line3 = ['z','x','c','v','b','n','m'];

  const handleKeyboard = useCallback((e)=> {
    if(e.key === 'Enter') {
      onEnter();
    } else if(e.key === 'Backspace') {
      onBackSpace()
    } else {
      const keys = line1.concat(line2, line3);
      keys.forEach(key => {
        if(key === e.key) {
          onAnyKey(key.toUpperCase());
        }
      })
    }
  })

  useEffect(()=> {
    document.addEventListener('keydown', handleKeyboard);
    
    return()=> {
      document.removeEventListener('keydown', handleKeyboard);
    }
  }, [handleKeyboard]);

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className='line-1 line'>{line1.map((keycap, idx) => (<Key keycap={keycap} disabled={disabledLetters.includes(keycap.toUpperCase())} key={idx} />))}</div>
      <div className='line-2 line'>{line2.map((keycap, idx) => (<Key keycap={keycap} disabled={disabledLetters.includes(keycap.toUpperCase())} key={idx}  />))}</div>
      <div className='line-3 line'><Key keycap={'enter'}/>{line3.map((keycap, idx) => (<Key keycap={keycap} key={idx} />))}<Key keycap={'delete'}/></div>
    </div>
  )
}
