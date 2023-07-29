import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class Button extends React.Component {
  render() {
    let { text, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#f6f6f6',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Button;
