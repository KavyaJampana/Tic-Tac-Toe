export default function({turnsL}){

    return(
        <ol id="log">
           {turnsL.map((turnM)=><li key={'${turnM.square.row}${turnM.square.col}'}>{turnM.player}selected{turnM.square.row},{turnM.square.col}</li>)}
        </ol>
        
    );
}