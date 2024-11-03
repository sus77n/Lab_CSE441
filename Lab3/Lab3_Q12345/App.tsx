import React, { useState } from 'react';

import Product from './Products/Products';
import Add from './Products/Product_Add';
import Search from './Products/Product_Search';
import Detail from './Products/Product_Detail';

import { BottomNavigation, Button} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'product', title: 'Products', focusedIcon: 'bell'},
    { key: 'add', title: 'Add', focusedIcon: 'heart'},
    { key: 'search', title: 'Search', focusedIcon: 'folder'},
    { key: 'detail', title:'Detail', focusedIcon: 'home'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    product: Product,
    add: Add,
    search: Search,
    detail: Detail,
  });

  return (
    <SafeAreaProvider>
      <Button icon="camera">
  Press me
</Button>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};
