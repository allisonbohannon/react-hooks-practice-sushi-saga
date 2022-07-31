import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushiList, eatSushi, upperBound, lowerBound, showMoreSushi, budget }) {


  const displayedSushi = sushiList.map(sushi => {
    if (sushi.id > lowerBound && sushi.id < upperBound) {
      return <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} budget={budget} />
    } 
  })

  return (
    <div className="belt">
      {displayedSushi}
      <MoreButton showMoreSushi={showMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
