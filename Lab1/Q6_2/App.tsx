import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SumFirstLastDigit = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const calculateSum = () => {
    if (number.length > 0) {
      const firstDigit = parseInt(number[0]);
      const lastDigit = parseInt(number[number.length - 1]);
      setResult(firstDigit + lastDigit);
    } else {
      setResult("Please enter a valid number");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sum First and Last Digit</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Calculate Sum" onPress={calculateSum} />
      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 16,
    fontSize: 18,
    textAlign: 'center',
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    color: '#333',
  },
});

export default SumFirstLastDigit;
