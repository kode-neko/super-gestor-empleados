import React from "react";

const IdCard = (props) => {
  const {user} = props;
  return (
    <div>
      <div>
        <img src={user.avatar} alt="user avatar"/>
        <ul>
            <li>{user.name} {user.surname}</li>
            <li>{user.city}</li>
            <li>{user.state}</li>
        </ul>
      </div>
    </div>
  );
};

export default IdCard;
