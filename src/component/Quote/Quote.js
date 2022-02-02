
import React from 'react';
import './Quote.css';


export default class Quote extends React.Component {

    constructor(props) {

        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {

        this.props.onClick();

    }

    render() {

        const { text, author , backgroundColor} = this.props;

        return (
            <div id="text">
                <div className="quote-text">
                    <p style={{ color: backgroundColor }}>{text}</p>

                </div>

                <div id="author">
                    <i className="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                    <p style={{ color: backgroundColor }}>- {author}</p>
                </div>

                <div className='button-links'>
                    <div className='links'>

                        <a className="button twitter-share-button" id="tweet-quote" title="Tweet this quote!" href={`https://twitter.com/intent/tweet?text=${this.props.text}`} target="_top" data-show-count="false" style={{ backgroundColor: backgroundColor }} >
                            Tweet
                        </a>

                        <a className="button" id="facebook-quote" title="Share this quote!" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" target="_top" style={{ backgroundColor: backgroundColor }}>
                            Facebook
                        </a>
                    </div>


                    <button className="button" id="new-quote" style={{ backgroundColor: backgroundColor }} onClick={this.handleClick}>
                        <span>Quote</span>
                    </button>
                </div>

            </div>
        );

    }



}