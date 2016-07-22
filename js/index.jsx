// jshint ignore: start

var React = require( 'react' );
var ReactDOM = require( 'react-dom' );


// Displays total of hands
var Sum = React.createClass( {
    render: function() {
      return (
      <div>'this is sum: '{this.props.number}</div>
    );
  }
} );


var Game = React.createClass( {
	// Callbacks/States Here
  getInitialState: function() {

    return {
      initialCard: Math.floor(Math.random() * 10) + 1,
      initialCard2: Math.floor(Math.random() * 10) + 1,
      cardsArr: [],
      cardNumb: '',
    }
  },

  onClick: function() {
    var randomCard = Math.floor(Math.random() * 10) + 1;
    var newCardsArr = this.state.cardsArr.slice();
    newCardsArr.push(<Card text={randomCard} />);
    // console.log(newCardsArr, "newCardsArr");
    this.setState({
        cardsArr: newCardsArr
    });
    var stateArr = this.state.cardsArr;
    console.log(stateArr[0].props.text, "props.text");
    // var initialSum = this.state.initialCard + this.state.initialCard2;
    // console.log(initialSum, "initial sum");
  },

	// Render Game
	render: function() {
    // console.log(this.state.cardsArr, "cardsArr");
    //Add a for loop to grab the value of object.props.text of each object from  this.state.cardsArr, then return sum of the values from each index

    // for (var i = 0; i<stateArr.length; i++) {
    //   var
    //   stateArr[i].props.text
    // }

		return (
			<div className="table">
				<div className="title">Lonely Black Jack</div>
        <Button onClick={this.onClick}/>
        <Sum number={this.state.initialCard + this.state.initialCard2} />
				<Card text={this.state.initialCard}/>
        <Card text={this.state.initialCard2}/>
        <div>{this.state.cardsArr}</div>

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
      <button onClick={this.props.onClick}>Hit me</button>
    );
  }
});


document.addEventListener( 'DOMContentLoaded', function() {
  ReactDOM.render( <Game />, document.getElementById( 'app' ) );
} );
