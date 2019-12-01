import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TitleSection = ({ registerTitle, mainTitle, subTitle }) => (
  <View style={styles.container} >
    <Text style={styles.registerTitle}>{registerTitle}</Text>
    <Text style={styles.mainTitle}>{mainTitle}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
  </View>
);

export default TitleSection;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    registerTitle: {
        paddingLeft: 20,
        fontSize: 30,
        fontWeight: '600',
    }, 
    mainTitle: {
        paddingLeft: 20,
        color: '#fff',
        fontSize: 30,
        fontWeight: '600',
    }, 
    subTitle: {
      color: '#653f90',
      fontSize: 26,
      fontWeight: 'bold',
      alignSelf: 'center',
    }
})