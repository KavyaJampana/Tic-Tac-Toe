import { useState } from "react";

export default function Player({initialPlayer,symbol,activeP}){
   const[playerName,setPlayerName]=useState(initialPlayer)
    function PlayerNamefun(event){
        setPlayerName(event.target.value);
    }
    const[isEditing,setEdit]=useState(false);
    function EditFun(){
        setEdit(editing=>!editing);
    }
    let changingOfName=<span className="player-name">{playerName}</span>
          
    if(isEditing){
        changingOfName=<input type="text" value={playerName} onChange={PlayerNamefun}/>
    }

    return(
        <li className={activeP ? 'active':undefined}>
            <span className="player">
                {changingOfName}
                <span className="player-symbol">{symbol}</span>
            </span>
          <button onClick={EditFun}>{isEditing ? "save" :"edit"}</button>
        </li>
         
    );
}