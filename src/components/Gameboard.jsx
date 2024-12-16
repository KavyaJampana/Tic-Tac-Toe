


export default function Gameboard({onSelectSquare,board}){
   // const [Board,setBoard]=useState(intialGameBoard);

    // function buttonUpdation(rowIndex,colIndex){
    //     // setBoard((prevBoard)=>
    //     // {
    //         const updatedBoard=[...Board.map(innerRow=>[...innerRow] )];
    //         updatedBoard[rowIndex][colIndex]=activeS;
    //         setBoard(updatedBoard);
    //     // });
    //     onSelectSquare();
        
    // }

    

    return(
        <ol id="game-board">
            {board.map((row,rowIndex)=> (
            <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=> (
                    <li key={colIndex}>
                    <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>))
                }
            </ol>
            </li>))}
        </ol>
     );
}