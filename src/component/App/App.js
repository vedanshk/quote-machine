import QuoteBox from '../QuoteBox/QuoteBox';
import './App.css';
import { useState, useEffect } from 'react';
import QuoteFetch from '../../util/QuoteFetch';
import Colors from '../../util/RandomColor';




function App() {


  const [quote, setQuote] = useState({ "text": "Every one dies. Yes or no jhdfdfrtrtrtrtrtr", "author": "Unknown" });

  const [newQuote, setNewQuote] = useState(false);

  const [backgroundColor , setBackgroundColor] = useState('coral');


 

    useEffect(() => {
         if(newQuote){
        QuoteFetch.getQuote().then(data => {

            setQuote(data);
            setNewQuote(false);
            setBackgroundColor(Colors.color());
            
            

        });
      }

    }, [newQuote , backgroundColor]);

  
  
  return (
    <div className="App" style={{backgroundColor:backgroundColor}}>
      <QuoteBox quote={quote.text} author={quote.author} setNewQuote={setNewQuote} backgroundColor={backgroundColor} />
    </div>
  );
}
 
export default App;
