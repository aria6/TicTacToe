import React from 'react';
import { View, StyleSheet } from 'react-native';

import Square from './Square';

class Board extends React.Component {
  renderSquare = (index) => {
    let { squares, onSquarePress, winner } = this.props;

    return (
      <Square
        value={squares[index]}
        onPress={() => onSquarePress(index)}
        isWinnerLine={winner && winner.line.includes(index)}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={styles.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={styles.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;
