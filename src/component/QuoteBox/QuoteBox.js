
import React from "react";

import Quote from "../Quote/Quote";

import "./QuoteBox.css";



export default class QuoteBox extends React.Component {


    constructor(props) {

        super(props);
        this.onClick = this.onClick.bind(this);

    }
    onClick(){

        this.props.setNewQuote(true);
    }

    render(){


        return(
            <div id="quote-box">

                <Quote text={this.props.quote} author={this.props.author} onClick ={this.onClick} backgroundColor={this.props.backgroundColor}/>

            </div>
        );
    }



}