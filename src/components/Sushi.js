import React from "react";

function Sushi({ sushi, eatSushi, budget }) {

  const {id, name, img_url, price, created_at, eaten} = sushi
 
  function handleClick(){
    console.log(sushi.price)
    console.log(budget)
    if (sushi.price > budget) {
      alert (`You don't have enough money!`)
    } else {eatSushi(sushi.id)}
    
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick} id={id}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
