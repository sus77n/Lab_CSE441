

import React from 'react';

import Employee from './employee';
import EmployeeDetail from './employee_detail';
import { View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View>
    <Employee name='Nguyen van A' age='18' ocupation='IT'/>
    <Employee name='Tran Thi B' age='20' ocupation='ACC'/>
    <EmployeeDetail />
   </View>
  );
}



export default App;
