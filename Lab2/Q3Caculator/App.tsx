import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import styles from './style';
import {useState} from 'react';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);

  const handleNumberInput = num => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = op => {
    if (firstValue === null) {
      setFirstValue(parseFloat(displayValue));
      setOperator(op);
      setDisplayValue('0');
    } else {
      calculate();
      setOperator(op);
    }
  };

  const calculate = () => {
    if (firstValue !== null && operator) {
      const secondValue = parseFloat(displayValue);
      let result;

      switch (operator) {
        case '+':
          result = firstValue + secondValue;
          break;
        case '-':
          result = firstValue - secondValue;
          break;
        case 'x':
          result = firstValue * secondValue;
          break;
        case '/':
          result = firstValue / secondValue;
          break;
        default:
          return;
      }

      setDisplayValue(result.toString());
      setFirstValue(null);
      setOperator(null);
    }
  };

  const clear = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setOperator(null);
  };

  return (
    <SafeAreaView style={styles.container_default}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.display}>{displayValue}</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.number}
            onPress={() => handleNumberInput('7')}>
            <Text style={styles.num}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => handleNumberInput('8')}>
            <Text style={styles.num}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => handleNumberInput('9')}>
            <Text style={styles.num}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculus}
            onPress={() => handleOperatorInput('/')}>
            <Text style={styles.textCal}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.number}
            onPress={() => handleNumberInput('4')}>
            <Text style={styles.num}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => handleNumberInput('5')}>
            <Text style={styles.num}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => handleNumberInput('6')}>
            <Text style={styles.num}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculus}
            onPress={() => handleOperatorInput('x')}>
            <Text style={styles.textCal}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.number}
            onPress={() => handleNumberInput('1')}>
            <Text style={styles.num}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => handleNumberInput('2')}>
            <Text style={styles.num}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => handleNumberInput('3')}>
            <Text style={styles.num}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculus}
            onPress={() => handleOperatorInput('-')}>
            <Text style={styles.textCal}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.number0}
            onPress={() => handleNumberInput('0')}>
            <Text style={styles.num}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculus}
            onPress={() => handleOperatorInput('+')}>
            <Text style={styles.textCal}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.result} onPress={calculate}>
            <Text style={styles.num}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.clear} onPress={clear}>
            <Text style={styles.num}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
