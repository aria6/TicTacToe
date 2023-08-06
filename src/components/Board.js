import React from 'react';
import { View, StyleSheet } from 'react-native';

import Square from './Square';

class Board extends React.Component {
  render() {
    let { squares, onSquarePress } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Square value={squares[0]} onPress={() => onSquarePress(0)} />
          <Square value={squares[1]} onPress={() => onSquarePress(1)} />
          <Square value={squares[2]} onPress={() => onSquarePress(2)} />
        </View>
        <View style={styles.row}>
          <Square value={squares[3]} onPress={() => onSquarePress(3)} />
          <Square value={squares[4]} onPress={() => onSquarePress(4)} />
          <Square value={squares[5]} onPress={() => onSquarePress(5)} />
        </View>
        <View style={styles.row}>
          <Square value={squares[6]} onPress={() => onSquarePress(6)} />
          <Square value={squares[7]} onPress={() => onSquarePress(7)} />
          <Square value={squares[8]} onPress={() => onSquarePress(8)} />
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
