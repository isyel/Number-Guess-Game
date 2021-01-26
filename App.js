import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./components/screens/GameOverScreen";
import GameScreen from "./components/screens/GameScreen";
import StartGameScreen from "./components/screens/StartGameScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [noOfGuessRounds, setNoOfGuessRounds] = useState(0);

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
		setNoOfGuessRounds(0);
	};

	const gameOverHandler = (numberofRounds) => {
		setNoOfGuessRounds(numberofRounds);
	};

	const configureNewGameHandler = () => {
		setNoOfGuessRounds(0);
		setUserNumber(null);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && noOfGuessRounds <= 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (noOfGuessRounds > 0) {
		content = (
			<GameOverScreen
				noOfRoundsTaken={noOfGuessRounds}
				userNumber={userNumber}
				onRestart={configureNewGameHandler}
			/>
		);
	}

	return (
		<View style={styles.screen}>
			<Header title="Guess a Number" />
			{content}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
