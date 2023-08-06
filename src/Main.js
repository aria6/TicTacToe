import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Button from './core-ui/Button';
import Board from './components/Board';

class Main extends React.Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
  };

  onSquarePress = (indexSquare) => {
    let { history, stepNumber, xIsNext } = this.state;

    let listHistory = history.slice(0, stepNumber + 1);
    let currentSquare = listHistory[listHistory.length - 1];

    let squares = [...currentSquare.squares];
    squares[indexSquare] = xIsNext ? 'X' : 'O';

    let newHistory = listHistory.concat([
      {
        squares: squares,
      },
    ]);

    this.setState({
      history: newHistory,
      stepNumber: listHistory.length,
      xIsNext: !xIsNext,
    });
  };

  jumpTo = (step) => {
    let { history } = this.state;

    if (step < 0) {
      return;
    }

    if (history.length > step) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0,
      });
    }
  };

  onResetPress = () => {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  };

  render() {
    let { xIsNext, history, stepNumber } = this.state;
    let characterInfo = xIsNext ? 'X' : 'O';

    let currentStep = history[stepNumber];

    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.header}>
          <Text style={styles.title}>TIC TAC TOE</Text>
          <Text style={styles.subtitle}>Sekarang Giliran Jalan</Text>
          <Text style={styles.subtitle}>{characterInfo}</Text>
        </View>
        <Board
          squares={currentStep.squares}
          onSquarePress={this.onSquarePress}
        />
        <View style={styles.footer}>
          <Button text='Prev' onPress={() => this.jumpTo(stepNumber - 1)} />
          <Button text='Reset' onPress={this.onResetPress} />
          <Button text='Next' onPress={() => this.jumpTo(stepNumber + 1)} />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 25,
  },
  footer: {
    flexDirection: 'row',
  },
});

export default Main;
