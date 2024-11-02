import './App.css';
import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareWhatsapp, faSquareXTwitter, faSquareReddit } from '@fortawesome/free-brands-svg-icons'


const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  let quoteFormat = "'" + quote.content + "'" + " - " + quote.author;

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>

      {/* whatsapp */}
      <button>
        <a href={`https://api.whatsapp.com/send?text=${quoteFormat}`} target="_blank" rel="noopener noreferrer"> 
          <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" />
        </a>
      </button>

      {/* twitter */}
      <button>
        <a class="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${quoteFormat}`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
        </a>
      </button>

      {/* reddit */}
      <button>
        <a href={`https://www.reddit.com/submit?title=${quoteFormat}`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareReddit} size="2x" />
        </a>
      </button>

    </>
  )
}


export default App;
