import React, { useState } from 'react';

import Product from './Products/Products';
import Add from './Products/Product_Add';
import Search from './Products/Product_Search';
import Detail from './Products/Product_Detail';

import { BottomNavigation} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Product', title: 'Products', focusedIcon: 'album'},
    { key: 'Add', title: 'Add', focusedIcon: 'heart'},
    { key: 'Search', title: 'Search', focusedIcon: 'folder'},
    { key: 'Detail', title:'Detail', focusedIcon: 'home'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Product: Product,
    Add: Add,
    Search: Search,
    Detail: Detail,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};
