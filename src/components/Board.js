import React from 'react';
import { View, StyleSheet } from 'react-native';

import Square from './Square';

let functionHandleClick = () => {
  // Fungsi kosong sementara
};

class Board extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Square value={0} onPress={functionHandleClick} />
          <Square value={1} onPress={functionHandleClick} />
          <Square value={2} onPress={functionHandleClick} />
        </View>
        <View style={styles.row}>
          <Square value={4} onPress={functionHandleClick} />
          <Square value={5} onPress={functionHandleClick} />
          <Square value={6} onPress={functionHandleClick} />
        </View>
        <View style={styles.row}>
          <Square value={7} onPress={functionHandleClick} />
          <Square value={8} onPress={functionHandleClick} />
          <Square value={9} onPress={functionHandleClick} />
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
