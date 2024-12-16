import Player from "./components/Player";
import { useState } from "react";
import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./components/winning.js"
import GameOver from "./components/GameOver.jsx"
const intialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]


function playerfun(turns){
  let currentPlayer='X';
  if(turns.length>0 && turns[0].player==='X'){
    currentPlayer='O'
  }
  return currentPlayer;
}



function App() {
  // const[activePlayer,setActivePlayer]=useState('X');
  const[turns,setGameTurns]=useState([]);
  
  const activePlayer=playerfun(turns)

  function rematch(){
    setGameTurns([])
  }

  let win;
  let Board=[...intialGameBoard.map((innerarray)=>[...innerarray])];
    for(const turn of turns){
        const{square,player}=turn;
        const{row,col}=square;
        Board[row][col]=player;
    }

  const draw=turns.length===9;
  for(const comb of WINNING_COMBINATIONS){
    const first=Board[comb[0].row][comb[0].column];
    const second=Board[comb[1].row][comb[1].column];
    const third=Board[comb[2].row][comb[2].column];

    if(first && first===second && first===third){
      win=first;
    }
  }
  function activefun(rowIndex,colIndex){
    setGameTurns( (prevturns) =>{
      const currentPlayer=playerfun(prevturns)
    const updatedturns=[{square :{row:rowIndex,col:colIndex},player:currentPlayer}, ...prevturns]
      return updatedturns;
    }
    );
  }
  return ( 
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialPlayer="Player1" symbol='X' activeP={activePlayer==='X'}/>
        <Player initialPlayer="Player2" symbol='O' activeP={activePlayer==='O'}/>
      </ol>
      {(win || draw) && <GameOver winner={win} match={rematch}/>}
      <Gameboard onSelectSquare={activefun} board={Board} />
      </div>
      <Log turnsL={turns}/>
    </main>
   
  );
}

export default App
