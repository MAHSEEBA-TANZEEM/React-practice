import './App.css';
import Lottery from './Lottery';
import { sum } from "./helper";


function App() {
  
  let winCondition = (ticket) => {
    return ticket[0] === 0;
    // return sum(ticket) === 15;
    // return ticket.every((num)=> num ===ticket[0]);
  }

  return (
    <>
     <Lottery n={3} winCondition={winCondition}/>
    </>
  );
}

export default App;
