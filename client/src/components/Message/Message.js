import React from 'react';
import ReactEmoji from 'react-emoji';

import './Message.css';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim();
  // const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser ? (
      <div style={{ display: 'flex', marginBottom: 10 }}>
        <div className='avatar'>{trimmedName.slice(0, 1)}</div>
        <div>
          <p style={{ color: "gray", margin: 2, fontSize: 10 }}>{trimmedName}</p>
          <p style={{ color: "white", margin: 2, fontSize: 25 }}>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    ) : (
      <div style={{ display: 'flex', marginBottom: 10 }}>
        <div className='avatar'>{user.slice(0, 1)}</div>
        <div>
          <p style={{ color: "gray", margin: 2, fontSize: 10 }}>{user}</p>
          <p style={{ color: "white", margin: 2, fontSize: 25 }}>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    )
  )
}

export default Message;
