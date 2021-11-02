import React from "react";

const Class = ({id, name, onClick}) => {
    return (
      <div id={id} onClick={onClick} >
        {name}
      </div>
    );
}

export default Class;