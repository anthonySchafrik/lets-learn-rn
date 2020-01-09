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
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={setGoalText}
          value={setGoal}
          style={styles.goalInput}
        />
        <Button title="Add" onPress={setUserGoal} />
      </View>

      <FlatList
        data={userGoal}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <View style={styles.goalList}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
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
  },
  goalList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
