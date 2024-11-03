import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FindMinimum = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [minimum, setMinimum] = useState('');

  const calculateMinimum = () => {
    // Parse the inputs as integers
    const number1 = parseInt(num1, 10);
    const number2 = parseInt(num2, 10);
    const number3 = parseInt(num3, 10);

    // Check if all inputs are valid numbers
    if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
      // Calculate the minimum of the three numbers
      const minValue = Math.min(number1, number2, number3);
      setMinimum(minValue);
    } else {
      setMinimum("Please enter valid numbers.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find the Minimum of Three Numbers</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter third number"
        keyboardType="numeric"
        value={num3}
        onChangeText={(text) => setNum3(text)}
      />

      <Button title="Calculate Minimum" onPress={calculateMinimum} />

      {minimum !== null && (
        <Text style={styles.result}>Minimum: {minimum}</Text>
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

export default FindMinimum;
