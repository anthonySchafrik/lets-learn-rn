import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ handleGoalAdd, isVisible, setIsVisible }) => {
  const [setGoal, handleSetGoal] = useState('');

  const setGoalText = goalText => handleSetGoal(goalText);

  const addGoal = () => {
    handleGoalAdd(setGoal);
    handleSetGoal('');
  };

  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={setGoalText}
          value={setGoal}
          style={styles.goalInput}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoal} />
          </View>

          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={() => setIsVisible(false)}
            />
          </View>
        </View>
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
  },
  buttonContainer: {
    width: '80%',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    width: '25%'
  }
});

export default GoalInput;
