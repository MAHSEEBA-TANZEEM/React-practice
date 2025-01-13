import { useState } from "react"

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue:0, red:0, yellow:0, green:0});
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue=() => {
        setMoves((premoves)=> {
            return {...premoves, blue: moves.blue + 1}
        });
        setArr((prevArr)=> {
            return [...prevArr,"blue moves"];
        });
        console.log(arr);
    };
    
    let updateYellow=() => {
        setMoves((premoves)=> {
            return {...premoves, yellow: moves.yellow + 1}
        });
    };
    
    let updateGreen=() => {
        setMoves((premoves)=> {
            return {...premoves, green: moves.green + 1}
        });
    };

    let updateRed=() => {
        setMoves((premoves)=> {
            return {...premoves, red: moves.red + 1}
        });
    };
    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>{arr}</p>
                <p>Blue moves = {moves.blue}</p>
                <button style = {{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style = {{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style = {{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style = {{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}