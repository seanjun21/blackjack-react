// jshint ignore: start

var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var Game = React.createClass( {
  // Callbacks/States Here
  getInitialState: function() {
    return {
      cardsArr: [ <Card text={Math.floor( Math.random() * 9 ) + 1} />, <Card text={Math.floor( Math.random() * 9 ) + 1} /> ],
      cardsArr2: [ <Card text={Math.floor( Math.random() * 9 ) + 1} />, <Card text={Math.floor( Math.random() * 9 ) + 1} /> ]
    }
  },

  onClick: function() {
    var randomCard = Math.floor( Math.random() * 9 ) + 1;
    var newCardsArr = this.state.cardsArr.slice();
    newCardsArr.push( <Card text={randomCard} /> );
    this.setState( {
      cardsArr: newCardsArr
    } );
  },

  onClick2: function() {
    var randomCard = Math.floor( Math.random() * 9 ) + 1;
    var newCardsArr2 = this.state.cardsArr2.slice();
    newCardsArr2.push( <Card text={randomCard} /> );
    this.setState( {
      cardsArr2: newCardsArr2
    } );
  },

  // Render Game
  render: function() {
    //Add a for loop to grab the value of object.props.text of each object from  this.state.cardsArr, then return sum of the values from each index
    var cardSum = 0;
    for ( var i = 0; i < this.state.cardsArr.length; i++ ) {
      cardSum += parseInt( this.state.cardsArr[ i ].props.text );
    }
    var cardSum2 = 0;
    for ( var i = 1; i < this.state.cardsArr2.length; i++ ) {
      cardSum2 += parseInt( this.state.cardsArr2[ i ].props.text );
    }
    var cardSum2True = 0;
    for ( var i = 0; i < this.state.cardsArr2.length; i++ ) {
      cardSum2True += parseInt( this.state.cardsArr2[ i ].props.text );
    }
    if ( cardSum2True >= 21 || cardSum === 21 ) {
      return (
        <div className="table">
          <div className="title">Lonely BlackJack</div>
          <button style={{ color: "blue" }} onClick="javascript:location.reload(true)">"Player Won! Click to Replay"</button>
        </div>
      )
    } else if ( cardSum < 21 ) {
      return (
        <div className="table">
          <div className="title">Lonely BlackJack</div>
          <div className="info-button">
            <Sum number={cardSum} />
            <Button color="blue" onClick={this.onClick} text="Player" />
          </div>
          <section className="player">
            {this.state.cardsArr}
          </section>
          <div className="info-button">
            <Sum number={cardSum2} />
            <Button color="red" onClick={this.onClick2} text="House" />
          </div>
          <section className="house">
            {this.state.cardsArr2}
          </section>
        </div>
      );
    } else {
      return (
        <div className="table">
          <div className="title">Lonely BlackJack</div>
          <button style={{ color: "red" }} onClick="javascript:location.reload(true)">"House Won! Click to Replay"</button>
        </div>
      )
    }
  }
} );

// Generate two random numbers between 1 - 10 Math.floor(Math.random() * 10) + 1
// Holds button function to add another random number, concatenated
/*-- Bust when number is greater than 21 --*/
var Card = React.createClass( {
  // var card2 = Math.floor(Math.random() * 10) + 1;
  render: function() {
    return (
      <div className="card">{this.props.text}</div>
    )
  }
} );

// Upon clicking button, generates another random number added to value
var Button = React.createClass( {
  render: function() {
    var buttonColor = { color: this.props.color };
    return (
      <button style={buttonColor} onClick={this.props.onClick}>{ this.props.text }</button>
    );
  }
} );

// Displays total of hands
var Sum = React.createClass( {
  render: function() {
    return (
      <div className="sum">Displayed Sum: { this.props.number }</div>
    );
  }
} );

document.addEventListener( 'DOMContentLoaded', function() {
  ReactDOM.render( <Game />, document.getElementById( 'app' ) );
} );
