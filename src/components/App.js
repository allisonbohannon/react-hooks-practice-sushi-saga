import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [lowerBound, setLowerBound] = useState(0)
  const [upperBound, setUpperBound] = useState(5)
  const [budget, setBudget] = useState(25)

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      const mappedSushi = data.map(sushi => {
        return {...sushi, eaten:false}
      })
      setSushiList(mappedSushi)})
  }, [])

  function eatSushi(id) {
   
    const updatedSushiList = sushiList.map(sushi => {
      if (sushi.id === id) {
        return {...sushi, eaten: true}
      } else {
        return sushi
      }
    })
    setSushiList(updatedSushiList)
    
    const moneySpent = sushiList.reduce(function(prev, current) {
      if (current.id === id) {
        return prev + current.price
      } else {return prev}
    },0 )
    
    console.log(moneySpent)
    setBudget(budget => budget - moneySpent); 
    
  }

  function showMoreSushi() {
    setLowerBound(lowerBound => lowerBound + 4)
    setUpperBound(upperBound => upperBound + 4)
  }


  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} eatSushi={eatSushi} upperBound={upperBound} lowerBound={lowerBound} showMoreSushi={showMoreSushi} budget={budget}/>
      <Table budget={budget}/>
    </div>
  );
}

export default App;
