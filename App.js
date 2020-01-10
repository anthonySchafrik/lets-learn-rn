import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [userGoal, handleUserGoal] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const setUserGoal = setGoal => () => {
    handleUserGoal([
      ...userGoal,
      { id: Math.random().toString(), value: setGoal }
    ]);

    setIsVisible(false);
  };

  const removeGoalHandler = goalId => () =>
    handleUserGoal(userGoal.filter(goal => goal.id !== goalId));

  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={() => setIsVisible(true)} />

      <GoalInput handleGoalAdd={setUserGoal} isVisible={isVisible} />

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
