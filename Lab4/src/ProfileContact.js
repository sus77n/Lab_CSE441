import React from 'react';
import { StyleSheet, View, Text, Alert, Button } from "react-native";
import ContactThum from './ContactThum';
import DetailListIt from './DetailListItem';
import {IconButton, } from 'react-native-paper';

const ProfileContact = ({route}) =>{
    const {contact} = route.params;
    const {id, avatar, name, email, phone, cell, favorite} = contact;

    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThum avatar={avatar} name={name} phone={phone}/>
            </View>
            <View style={styles.detailsSection}>
                <DetailListIt icon="mail" title="Email" subtitle={email}/>
                <DetailListIt icon="phone" title="Work" subtitle={phone}/>
                <DetailListIt icon="smartphone" title="Personal" subtitle={cell}/>
                <View style={styles.iconButtonContainer}> {/* Use the defined style */}
                    <IconButton
                        icon={favorite === true ? "star-check" : "star-check-outline"}
                        iconColor="#663399"
                        size={20}
                        onPress={() => {
                            // Your onPress function here
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default ProfileContact;