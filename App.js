import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [userGoal, handleUserGoal] = useState([]);

  const setUserGoal = setGoal => () =>
    handleUserGoal([
      ...userGoal,
      { id: Math.random().toString(), value: setGoal }
    ]);

  const removeGoalHandler = goalId => () =>
    handleUserGoal(userGoal.filter(goal => goal.id !== goalId));

  return (
    <View style={styles.container}>
      <GoalInput handleGoalAdd={setUserGoal} />

      <FlatList
        data={userGoal}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <GoalItem
            goalId={itemData.item.id}
            goal={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
