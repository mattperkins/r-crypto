import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './style.css'
import axios from 'axios'
const NumForm = require('react-number-format')

class App extends Component {
 state = {
  cryptos: []
 }

 componentDidMount(){
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
  .then(res => {
   const cryptos = res.data
   console.log(cryptos)
   this.setState({cryptos})
  })
 }
  render() {
   const {cryptos} = this.state
    return (
     <div>
      {Object.keys(cryptos).map((key) => (
       <div style={container}>
        <span style={left}>{key}</span>
        <span style={right}>
         <NumForm 
          value={cryptos[key].USD} 
          displayType={'text'}
          decimalPrecision={2}
          thousandSeparator={false}
          prefix={'$'}
         /></span>
       </div>
      ))}
     </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()


const container = {
paddingTop: 90,
fontFamily: 'sans-serif',
background: 'white',
width: '70%',
margin: '0 auto 4px auto',
padding: '1em',
boxShadow: '1px 1px 0 lightgrey'
}
const left = {
fontWeight : 'bold'
}
const right = {
float: 'right'
}

