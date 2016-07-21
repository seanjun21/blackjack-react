// jshint ignore: start

var React = require( 'react' );
var ReactDOM = require( 'react-dom' );


var Game = React.createClass( {
	// Callbacks/States Here

	// Render Game
	render: function() {

    	var randomCard = Math.floor(Math.random() * 10) + 1;
      var randomCard2 = Math.floor(Math.random() * 10) + 1;

		return (
			<div className="table">
				<div className="title">Lonely Black Jack</div>
				<Card text={randomCard}/>
        <Card text={randomCard2}/>
				{/*<Sum />
				<Button />*/}
			</div>
		);
	}
} );


// Generate two random numbers between 1 - 10 Math.floor(Math.random() * 10) + 1
// Holds button function to add another random number, concatenated
/*-- Bust when number is greater than 21 --*/
var Card = React.createClass( {

	// var card2 = Math.floor(Math.random() * 10) + 1;

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
      <button
        type="submit"
        onClick={this.props.onClick}
      />
    );
  }
});







// Displays total of hands
var Sum = React.createClass( {

} );



document.addEventListener( 'DOMContentLoaded', function() {
  ReactDOM.render( <Game />, document.genElementByID( 'app' ) );
} );
