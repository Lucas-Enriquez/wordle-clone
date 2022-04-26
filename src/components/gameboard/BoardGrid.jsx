import { Letter } from '../Letter';

export const BoardGrid = () => {
  return (
    <div className='board-grid-container'>
        <div className='board-grid'>
            <div className='row'>
                <Letter letterPos={0} attemptNumber={0} />
                <Letter letterPos={1} attemptNumber={0} />
                <Letter letterPos={2} attemptNumber={0} />
                <Letter letterPos={3} attemptNumber={0} />
                <Letter letterPos={4} attemptNumber={0} />
            </div>

            <div className='row'>
                <Letter letterPos={0} attemptNumber={1} />
                <Letter letterPos={1} attemptNumber={1} />
                <Letter letterPos={2} attemptNumber={1} />
                <Letter letterPos={3} attemptNumber={1} />
                <Letter letterPos={4} attemptNumber={1} />
            </div>

            <div className='row'>
                <Letter letterPos={0} attemptNumber={2} />
                <Letter letterPos={1} attemptNumber={2} />
                <Letter letterPos={2} attemptNumber={2} />
                <Letter letterPos={3} attemptNumber={2} />
                <Letter letterPos={4} attemptNumber={2} />
            </div>

            <div className='row'>
                <Letter letterPos={0} attemptNumber={3} />
                <Letter letterPos={1} attemptNumber={3} />
                <Letter letterPos={2} attemptNumber={3} />
                <Letter letterPos={3} attemptNumber={3} />
                <Letter letterPos={4} attemptNumber={3} />
            </div>

            <div className='row'>
                <Letter letterPos={0} attemptNumber={4} />
                <Letter letterPos={1} attemptNumber={4} />
                <Letter letterPos={2} attemptNumber={4} />
                <Letter letterPos={3} attemptNumber={4} />
                <Letter letterPos={4} attemptNumber={4} />
            </div>

            <div className='row'>
                <Letter letterPos={0} attemptNumber={5} />
                <Letter letterPos={1} attemptNumber={5} />
                <Letter letterPos={2} attemptNumber={5} />
                <Letter letterPos={3} attemptNumber={5} />
                <Letter letterPos={4} attemptNumber={5} />
            </div>
            
        </div>
    </div>
  )
}
