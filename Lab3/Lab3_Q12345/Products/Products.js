import { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView, Image, Button } from "react-native";
import styles from "./StyleProduct";

function Product () {
    const [data, setData] = useState([]);
    const filePath ='https://dummyjson.com/products/';
    useEffect(() => {
        fetch(filePath)
        .then((response) => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then ((d) => {
            setData(d.products);
        })
        .catch ((error) => {
            console.error('Error fetching data: ', error);
        });
    })


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style ={styles.title}>Product list</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item}) => {
                   return(
                        <View style={styles.card}>
                            <View style={styles.left}>
                                <Image
                                    style ={styles.img}
                                    source={{uri: item.thumbnail}}
                                />
                            </View>
                            <View style={styles.right}>
                                <Text style={styles.titlePr}>Title: {item.title}</Text>
                                <Text>{item.description}</Text>
                                <Text>Price: {item.price}</Text>
                                <Text style={styles.dis}>Discount: {item.discountPercentage} off</Text>
                                <Text>Rating: {item.rating}</Text>
                                <Text>Stock: {item.stock}</Text>
                                <Text>Brand: {item.brand}</Text>
                                <Text>Category: {item.category}</Text>
                                <View style={styles.groupButton}>
                                    <View style = {styles.button}>
                                        <Button title="Detail"/>
                                    </View>
                                    <View>
                                        <Button title="Add" style ={styles.button}/>
                                    </View>
                                    <View>
                                        <Button title="Delete" style ={styles.button}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                   );
                }}
            />
    </SafeAreaView>
    );
}

export default Product;

