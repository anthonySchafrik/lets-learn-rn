import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ handleGoalAdd }) => {
  const [setGoal, handleSetGoal] = useState('');

  const setGoalText = goalText => handleSetGoal(goalText);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Course Goal"
        onChangeText={setGoalText}
        value={setGoal}
        style={styles.goalInput}
      />
      <Button title="Add" onPress={handleGoalAdd(setGoal)} />
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
