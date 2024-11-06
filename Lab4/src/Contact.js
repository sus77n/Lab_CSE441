import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsSuccess, mapContacts } from './Store';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ContactListItem from './ContactListITem';
import React  from 'react';


const fetchContacts = async () =>{
    const data = await fetch('https://randomuser.me/api/?results=50');
    const ContactData = await data.json();
    return ContactData.results.map(mapContacts);
};

const Contacts = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchContacts()
        .then(
            aaa => {
                dispatch(fetchContactsSuccess(aaa));
            }
        )
        .catch(
            e => {
                console.error(e);
            }
        )
    }, []);
    
    const keyExtractor = ({phone}) => phone;
    const {contacts} = useSelector((state) => state);
    
    const renderContacts = ({item}) => {
        const {name, avatar, phone} = item;
        return <ContactListItem
            name={name}
            avatar={avatar}
            phone={phone}
            onPress={() => navigation.navigate('ProfileContact', {contact: item})}
        />;
    };

    return (
        <View style ={styles.container}>
            <FlatList
                data={contacts}
                keyExtractor={keyExtractor}
                renderItem={renderContacts}
            />
        </View>
    );
}

export default Contacts;

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            flex: 1,
            paddingLeft: 10,
            paddingRight: 10,
        }
    })
