import {
  Alert,
  TextInput,
  View,
  SafeAreaView,
  Text,
  Button,
  FlatList,
} from 'react-native';
import styles from './StyleProduct';
import {useState} from 'react';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';

function Search() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  let filePath = 'https://dummyjson.com/products';

  const searchProduct = () => {
    if (value != '')
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <SafeAreaView>
      <Text style={styles.titleSearch}>Search Products</Text>
      <TextInput placeholder="Enter something" />
      <Button title="SEARCH" onPress={searchProduct} />

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Card>
                <Card.Title title='Product Detail' />
                <Card.Cover source={{uri: item.thumbnail}} />
                <Card.Content>
                  <Title>{item.title}</Title>
                  <Paragraph>Description: {item.description}</Paragraph>
                  <Paragraph>Price: {item.price}</Paragraph>
                  <Paragraph>Discount: {item.discountPercentage}</Paragraph>
                  <Paragraph>Rating: {item.rating}</Paragraph>
                  <Paragraph>Stock: {item.stock}</Paragraph>
                  <Paragraph>Brand: {item.brand}</Paragraph>
                  <Paragraph>Category: {item.category}</Paragraph>
                </Card.Content>
              </Card>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default Search;
