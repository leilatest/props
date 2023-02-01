import React from 'react'
import "./Style.css";
import Items from "./Items"


function Profile({ data, handleName }) {
  return (
    <div className="Profile">
      
        {handleName()}
        {data.map((elt, index) => (
          <Items {...elt} key={index}>
            <img
              src="https://t3.ftcdn.net/jpg/01/77/54/02/360_F_177540231_SkxuDjyo8ECrPumqf0aeMbean2Ai1aOK.jpg"
              alt=""
            />
          </Items>
        ))}
      </div>
    
  );
}

export default Profile










