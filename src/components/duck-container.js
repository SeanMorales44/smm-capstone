import React, { Component } from "react"
import DuckAskBar from "./duck-ask-bar"
import { DuckQuestions } from "./duck-functions"
import duckImage from "../../static/assets/image"
import { render } from "node-sass";


export default class DuckContainer extends Component {
  constructor(props) {
  super(props);

    state = {
      value: ''
    };

    getValue  = (event) => {
      console.log('Event: ',event.target.value);

      this.setState({ value: event.target.value });
    }

    handleSubmit = () => {
      const value = this.state.value;

      console.log('Value on Submit: ', value);
    };

    componentDidMount() {
      const getQuote = async () => {
         const now = new Date()
         let dateData = {}

         fetch ("https://qotd-smm-capstone.herokuapp.com/answer/get")
         .then(response => response.json())
         .then(data => dataData = data)
         .catch(error => console.log("Error getting answer", error))

         if (dataData.day !== now.getUTCDate())
          fetch("https:https://qotd-smm-capstone.herokuapp.com/answer/update", {
            method: "PUT", 
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                day: now.getUTCDate()
            })
          })
          .then(response => response.json())
          .then(data => this.setState({ data: data }))
          .catch(error => console.log("Error getting answer", error))
        }
        
    }
      
  } 


  render() {
    return (
      <div className='button-page'>
        <h1>{this.props.heading}</h1>
        
        <button onClick={this.toggleStatus}>Submit</button>

        <div className="input-wrapper">
            <input type="text" />
        </div>
      </div>
    );
  }

  render() {
    console.log('State: ', this.state);

    return (
      <div>
        <h2>Welcome to Duck Wizard</h2>
        <form action="">
          <div>
            <label htmlFor=""></label>
            <input type="text" onChange = { this.getValue }/>
          </div>

          <buttom onClick = { this.handleSubmit }>Submit</buttom>
        </form>
      </div>
    );
  }
}