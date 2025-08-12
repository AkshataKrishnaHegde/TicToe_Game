import { useState } from 'react'
import Card from '../Card/Card'

import './Grid.css'

function isWinner(board,symbol){
if(board[0]==board[1] && board[1]==board[2] && board[2]== symbol) return symbol;
if(board[3]==board[4] && board[4]==board[5] && board[5]== symbol) return symbol;
if(board[6]==board[7] && board[7]==board[8] && board[8]== symbol) return symbol;

if(board[0]==board[3] && board[3]==board[6] && board[6]== symbol) return symbol;
if(board[1]==board[4] && board[4]==board[7] && board[7]== symbol) return symbol;
if(board[2]==board[5] && board[5]==board[8] && board[8]== symbol) return symbol;

if(board[0]==board[4] && board[4]==board[8] && board[8]== symbol) return symbol;
if(board[2]==board[4] && board[4]==board[6] && board[6]== symbol) return symbol;

return  null;
        
}
function Grid({numberOfCards}){
    const [turn,setTurn]=useState(true);  //false -> x true ->0
    const [board,setBoard] =useState(Array(numberOfCards).fill(""));
    const [winner,setWinner]=useState("")
    
    function play(index){
        console.log("move played",index)
        if(turn==true){
            board[index]="0";
        }
        else{
            board[index]="X";
        }
        const win=isWinner(board, turn?"0":"X");
        if(win){
        setWinner(win);
        }
    
        setBoard([...board]);
        setTurn(!turn);
    }
    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }
    return(
        <>
        {winner && 
        <><h1>Winner is {winner}</h1>
        <button onClick={reset}>Reset game</button>
        </>
        }

        <h1 className='turn-highlight'>Current Turn:{(turn)?'0':'X'}</h1>
        <div className='grid'>
        {board.map((value,idx)=>{
            return <Card gameEnd={winner?true:false} onPlay={play} player={value} key={idx} index={idx}/>
        })}
        </div>
        </>
    )
}

export default Grid;