import React from 'react';
import axios from 'axios'

class QuoteCard extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      quoteText: '',
      quoteAuthor: '',
      error: null, 
      isLoaded: false
   
    }

    this.randomQuote = this.randomQuote.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);
  } 

  // fetch random quote
randomQuote() {
      let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

      axios.get(url)
         .then(res => {
            let data = res.data.quotes
console.log(data);
            let quoteNum = Math.floor(Math.random() * data.length)
            let randomQuote = data[quoteNum]
            // let randomQuote = data[Math.floor(Math.random() * data.length)]

            this.setState({
              quoteText: randomQuote['quote'],
              quoteAuthor: randomQuote['author']
            })
         })
}



  componentDidMount() {
    this.randomQuote();
  }
  getNewQuote = () => {
    this.randomQuote()
 }
  render() {
    const {quoteText, quoteAuthor} = this.state;
   

        return (
          
              <div>
						 <h2 className="display-4 pb-3 text-center"> Quote of Day</h2>
             <p className="lead text-center pb-3">
        {quoteText},<b>{quoteAuthor}</b>
      </p>
              </div>
        )
     
  }
}

export default QuoteCard;