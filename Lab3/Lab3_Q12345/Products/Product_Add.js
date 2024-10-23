import { useState } from "react";
import { Alert, TextInput , View, SafeAreaView, Text, Button} from "react-native";
import styles from "./StyleProduct";

function Add (){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');

    handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                discountPercentage: discountPercentage,
                rating: rating,
                stock: stock,
                brand: brand,
                category: category,
                images: images,
            }),
        })
        .then((res) => res.json)
        .then(console.log);
        Alert.alert("Add sucessfull");
        clearForm();
    };

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPrice('');
        setDiscountPercentage('');
        setRating('');
        setStock('');
        setCategory('');
        setImages('');
      };

    return(
        <SafeAreaView>
            <Text style={styles.titleAdd}>Add a Product</Text>
            <Text style={styles.label}>Title</Text>
            <TextInput 
                placeholder="Enter title"
                placeholderTextColor="grey"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Description</Text>
            <TextInput 
                placeholder="Enter description"
                placeholderTextColor="grey"
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <Text style={styles.label}>Price</Text>
            <TextInput 
                placeholder="Enter price"
                placeholderTextColor="grey"
                value={price}
                onChangeText={(text) => setPrice(text)}
            />
            <Text style={styles.label}>Discount Percentage</Text>
            <TextInput 
                placeholder="Enter discount percentage"
                placeholderTextColor="grey"
                value={discountPercentage}
                onChangeText={(text) => setDiscountPercentage(text)}
            />
            <Text style={styles.label}>Rating</Text>
            <TextInput 
                placeholder="Enter rating"
                placeholderTextColor="grey"
                value={rating}
                onChangeText={(text) => setRating(text)}
            />
            <Text style={styles.label}>Brand</Text>
            <TextInput 
                placeholder="Enter brand"
                placeholderTextColor="grey"
                value={brand}
                onChangeText={(text) => setBrand(text)}
            />
            <Text style={styles.label}>Category</Text>
            <TextInput 
                placeholder="Enter title"
                placeholderTextColor="grey"
                value={category}
                onChangeText={(text) => setCategory(text)}
            />
            <Text style={styles.label}>Images</Text>
            <TextInput 
                placeholder="Enter images URL(s)"
                placeholderTextColor="grey"
                value={images}
                onChangeText={(text) => setImages(text)}
            />

            <Button title="Submit" onPress={handleSubmit}/>

        </SafeAreaView>
    );
}

export default Add;