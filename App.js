import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [setGoal, handleSetGoal] = useState('');
  const [userGoal, handleUserGoal] = useState([]);

  const setGoalText = goalText => handleSetGoal(goalText);

  const setUserGoal = () => handleUserGoal([...userGoal, setGoal]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={setGoalText}
          value={setGoal}
          style={styles.goalInput}
        />
        <Button title="Add" onPress={setUserGoal} />
      </View>

      <View>
        {userGoal.map((goal, i) => {
          return <Text key={i}>{goal}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  innerContainer: {
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
