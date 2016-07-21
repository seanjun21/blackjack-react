// jshint ignore: start

var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var Game = React.createClass( {
	// Callbacks/States 
  getInitialState: function() {

    return {
      initialCard: Math.floor(Math.random() * 10) + 1,
      initialCard2: Math.floor(Math.random() * 10) + 1,
      cardsArr: [],
      cardNumb: ''
    }
  },

  onClick: function() {
    var randomCard = Math.floor(Math.random() * 10) + 1;
    var newCardsArr = this.state.cardsArr.slice();
    newCardsArr.push(<Card key={newCardsArr.length} text={randomCard} />);

    this.setState({
        cardsArr: newCardsArr
    })
    console.log(this.state.cardsArr);
  },

	// Render Game
	render: function() {
		return (
			<div className="table">
				<div className="title">Lonely Black Jack</div>
				<Card text={this.state.initialCard}/>
        		<Card text={this.state.initialCard2}/>
        		<div>{this.state.cardsArr}</div>
				<Button onClick={this.onClick}/>
			</div>
		);
	}
} );

// Generate two random numbers between 1 - 10 Math.floor(Math.random() * 10) + 1
// Holds button function to add another random number, concatenated
/*-- Bust when number is greater than 21 --*/
var Card = React.createClass( {
	render: function() {
		return (
      <div>{this.props.text}</div>
		)
	}
} );

// Upon clicking button, generates another random number added to value
var Button = React.createClass ({
  render: function() {
    return (
      <button onClick={this.props.onClick} ></button>
    );
  }
});


// Displays total of hands
// var Sum = React.createClass( {
//
// } );



document.addEventListener( 'DOMContentLoaded', function() {
  ReactDOM.render( <Game />, document.getElementById( 'app' ) );
} );