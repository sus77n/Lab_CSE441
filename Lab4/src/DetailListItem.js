import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const DetailListIt = ({ icon, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} type="material" size={24} color="#663399" />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    textContainer: {
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
});

export default DetailListIt;
