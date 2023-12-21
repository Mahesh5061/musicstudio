import React, { Component } from "react";
import "../PlaySound/index.css"

// Import your audio file
import song from "../../data/a.mp3";

class PlaySound extends Component {
	// Create state
	state = {

		// Get audio file in a variable
		audio: new Audio(song),

		// Set initial state of song
		isPlaying: false,
	};

	// Main function to handle both play and pause operations
	playPause = () => {

		// Get state of song
		let isPlaying = this.state.isPlaying;

		if (isPlaying) {
			// Pause the song if it is playing
			this.state.audio.pause();
		} else {

			// Play the song if it is paused
			this.state.audio.play();
		}

		// Change the state of song
		this.setState({ isPlaying: !isPlaying });
	};

	render(props) {
		const {color} = this.props;
		return (
			<div class="song-banner ; color:{color}" onClick={this.playPause}>
				{/* Show state of song on website */}
				<p>
					{this.state.isPlaying ?
						"P" :
						"S"}
				</p>
			</div>
		);
	}
}

export default PlaySound;
