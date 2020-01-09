import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ handleText, handleGoalAdd, setGoal }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Course Goal"
        onChangeText={handleText}
        value={setGoal}
        style={styles.goalInput}
      />
      <Button title="Add" onPress={handleGoalAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  goalInput: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 5,
    padding: 10,
    width: '80%'
  }
});

export default GoalInput;
