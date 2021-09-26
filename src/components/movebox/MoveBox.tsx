import './MoveBox.scss';

const MoveBox = ({moves}: { moves: any}) => {
    return (
        <>
            { moves && 'Moves:' }
            <div className='moveBox'>
                { moves && moves.map((move: any)=> <li key={move}>{move}</li>) }
            </div>
        </>
    )
}

export default MoveBox;
