import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Game is Over</Text>
			<Text>Number of Rounds: {props.noOfRoundsTaken}</Text>
			<Text>Number was: {props.userNumber}</Text>
			<Button title="START NEW GAME" onPress={props.onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default GameOverScreen;
