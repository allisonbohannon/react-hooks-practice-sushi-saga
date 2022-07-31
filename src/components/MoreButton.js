import React from "react";

function MoreButton({ showMoreSushi }) {

  function handleClick() {
    showMoreSushi()
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
