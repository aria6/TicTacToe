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

  render() {
    let { xIsNext } = this.state;
    let characterInfo = xIsNext ? 'X' : 'O';

    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.header}>
          <Text style={styles.title}>TIC TAC TOE</Text>
          <Text style={styles.subtitle}>Sekarang Giliran Jalan</Text>
          <Text style={styles.subtitle}>{characterInfo}</Text>
        </View>
        <Board />
        <View style={styles.footer}>
          <Button text='Prev' onPress={() => {}} />
          <Button text='Reset' onPress={() => {}} />
          <Button text='Next' onPress={() => {}} />
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
