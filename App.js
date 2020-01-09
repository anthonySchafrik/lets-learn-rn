import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [setGoal, handleSetGoal] = useState('');
  const [userGoal, handleUserGoal] = useState([]);

  const setGoalText = goalText => handleSetGoal(goalText);

  const setUserGoal = () =>
    handleUserGoal([
      ...userGoal,
      { id: Math.random().toString(), value: setGoal }
    ]);

  return (
    <View style={styles.container}>
      <GoalInput
        setGoal={setGoal}
        handleText={setGoalText}
        handleGoalAdd={setUserGoal}
      />

      <FlatList
        data={userGoal}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => <GoalItem goal={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
