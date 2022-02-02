const QuoteFetch =  { getQuote: async () =>{

    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return {text: data.content, author: data.author};
  }
}

export default QuoteFetch;