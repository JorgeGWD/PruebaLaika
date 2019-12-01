import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class BackButton extends Component {
    render() {
        return(
            <View style={styles.container} >
                <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()} >
                    <Icon style={styles.backIcon} name="chevron-left" size={20} color="#653f90" />
                    <Text style={styles.text}>{this.props.buttonBackText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default withNavigation(BackButton);

const styles = StyleSheet.create({
    container: {
        zIndex: 100,
        position: 'absolute',
        top: 100,
        left: 20,
    },
    backBtn: {
        flexDirection: 'row',
    },
    backIcon: {
        marginRight: 5,
    },
    text: {
        color: '#fff',
    }
})