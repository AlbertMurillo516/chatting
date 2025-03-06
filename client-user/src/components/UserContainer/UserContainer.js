import React from "react";
import onlineIcon from "../../images/onlineIcon.png";

import "./UserContainer.css";

const UserContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div class="user-container">
        <h3 style={{ marginLeft: 15 }}>Users</h3>
        <div className="activeContainer">
          <p>
            {users.map(({ name }) => (
              <div key={name} className="activeItem" style={{ marginLeft: 20, marginBottom: 7}}>
                <img alt="Online Icon" src={onlineIcon} style={{ marginRight: 10 }}/>
                {name}
              </div>  
            ))}
          </p>
        </div>
      </div>
    ) : null}
  </div>
);

export default UserContainer;
