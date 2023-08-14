import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BACKGROUND_ACTIVE = '#CECECE';

class Square extends React.Component {
  render() {
    let { value, onPress, isWinnerLine } = this.props;

    let activeStyle = isWinnerLine
      ? { backgroundColor: BACKGROUND_ACTIVE }
      : null;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, activeStyle]}
      >
        <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 3,
    margin: 2,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default Square;
