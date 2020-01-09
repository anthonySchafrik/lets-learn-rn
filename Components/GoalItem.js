import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.goals}>
      <Text>{props.goal}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goals: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
