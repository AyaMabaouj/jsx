import React from 'react';
import './App.css';

const displayEmojiName = event => alert(event.target.id)
const emojis = [
  {
    emoji: "😀",
    name:"grinning face"
  },
  {
    emoji:"🎉",
    name:"party popper"
  },
  {
    emoji:"💃",
    name:"woman dancing"
  },
];
function App() {
  const greeting = 'greeting';
  const displayAction = false;
  return(
    <div class="container">
      <h1 id = 'greeting'>Hello, World</h1>
      {displayAction &&<p>I am writing JSX</p>}
      <ul>
       {
        emojis.map(emoji => (
          <li key = {emoji.name}>
             <button onClick={displayEmojiName}>
              <span role='img' aria-label={emoji.name}>{emoji.emoji}</span>
             </button>
          </li>
        ))
       }
      </ul>
    </div>
  )
}

export default App;