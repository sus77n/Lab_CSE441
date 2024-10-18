import {View, Button, Text, TextInput } from "react-native";


export default function Employee(props)
{
    return (
        <View>
            <Text>Full name: </Text>
            <TextInput>{props.name}</TextInput>
            <Text>Age: </Text>
            <TextInput>{props.age}</TextInput>
            <Text>Ocupation: </Text>
            <TextInput>{props.ocupation}</TextInput>
            <Button title="Update"></Button>
        </View>

    );
}