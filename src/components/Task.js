import React from "react";

function Task({text,category}) {
  
  console.log('a')
  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;