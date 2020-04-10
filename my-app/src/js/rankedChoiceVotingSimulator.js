import React, { Component } from 'react';

class RankedChoiceVotingComponent extends React.Component {

	render() {
		return <h1>Hello, world!</h1>;
	}
}


function RankedChoiceVotingSimulator() { 

	this._component = new RankedChoiceVotingComponent();
}

RankedChoiceVotingSimulator.prototype = {

	// State API
	get component() { return this._component; },


	// Functional API
	addCandidate: function() {

	},

	removeCandidate: function() {

	},

	addBallot: function() {

	},

	removeBallot: function() {

	},

	run: function() {

	},

	takeStep: function() {

	},


}

export { RankedChoiceVotingSimulator };