export default function GameOver({winner,match}){
    return <div id="game-over">
        <h2>You Won!</h2>
        {winner && <p>"WellDone!"  {winner} </p>}
    {!winner && <p>"Draw"</p>}
        <button onClick={match}>Rematch</button>
    </div>
}