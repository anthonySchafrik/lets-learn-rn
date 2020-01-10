import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ handleGoalAdd, isVisible }) => {
  const [setGoal, handleSetGoal] = useState('');

  const setGoalText = goalText => handleSetGoal(goalText);

  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={setGoalText}
          value={setGoal}
          style={styles.goalInput}
        />
        <Button title="Add" onPress={handleGoalAdd(setGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
