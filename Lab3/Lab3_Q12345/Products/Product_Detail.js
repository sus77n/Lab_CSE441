import {
    Alert,
    TextInput,
    View,
    SafeAreaView,
    Text,
    FlatList,
  } from 'react-native';
  import styles from './StyleProduct';
  import {useEffect, useState} from 'react';
  import {Avatar, Card, Button, Title, Paragraph} from 'react-native-paper';

  function Detail(){
    const[data, setData] = useState([])
    const filePath = 'https://dummyjson.com/products/2';

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });

    return (
        <View>
          <Card>
            <Card.Title title='Product Detail' />
            <Card.Cover source={{uri: data.thumbnail}} />
            <Card.Content>
              <Title>Title: {data.title}</Title>
              <Paragraph>Description: {data.description}</Paragraph>
              <Paragraph>Price: {data.price}</Paragraph>
              <Paragraph>Discount: {data.discountPercentage}</Paragraph>
              <Paragraph>Rating: {data.rating}</Paragraph>
              <Paragraph>Stock: {data.stock}</Paragraph>
              <Paragraph>Brand: {data.brand}</Paragraph>
              <Paragraph>Category: {data.category}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Delete</Button>
                <Button>Cancel</Button>
            </Card.Actions>
          </Card>
        </View>
      );
  }

  export default Detail;