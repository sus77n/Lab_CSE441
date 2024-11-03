import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const HailstoneSequence = () => {
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState([]);

  const generateHailstoneSequence = () => {
    let n = parseInt(number, 10);

    if (isNaN(n) || n <= 0) {
      setSequence(["Please enter a positive integer greater than 0"]);
      return;
    }

    const hailstoneSequence = [];

    while (n !== 1) {
      hailstoneSequence.push(n);
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
    }
    hailstoneSequence.push(1); // Add the last 1 to the sequence
    setSequence(hailstoneSequence);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hailstone Sequence</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter a positive integer"
        keyboardType="numeric"
        value={number}
        onChangeText={(text) => setNumber(text)}
      />
      
      <Button title="Generate Sequence" onPress={generateHailstoneSequence} />

      <ScrollView style={styles.sequenceContainer}>
        {sequence.length > 0 && (
          <Text style={styles.sequenceText}>
            {sequence.join(' → ')}
          </Text>
        )}
      </ScrollView>
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
  sequenceContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
    maxHeight: '50%',
  },
  sequenceText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default HailstoneSequence;
