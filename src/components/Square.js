import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class Square extends React.Component {
  render() {
    let { value, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
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
