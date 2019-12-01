import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import TitleSection from '../Commons/TitleSection/TitleSection';
import BackButton from '../Commons/BackButton/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome5';

class PetDataOptions extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleSection}>
                    <BackButton />
                    <TitleSection subTitle={"Datos de Mau"} />
                </View>
                <View style={styles.content}>
                    <View style={styles.contentBox}>
                        <Icon style={styles.contentIcon} name="birthday-cake" size={20} color="#653f90" />
                        <Text style={styles.contentBoxText}>Fecha de cumpleaños</Text>
                        <TouchableOpacity style={styles.touchableBtn}><Icon style={styles.backIcon} name="chevron-right" size={10} color="#653f90" /></TouchableOpacity>
                    </View>
                    <View style={styles.contentBox}>
                        <Icon style={styles.contentIcon} name="bone" size={20} color="#653f90" />
                        <Text style={styles.contentBoxText}>Marca de comidas</Text>
                        <TouchableOpacity style={styles.touchableBtn}><Icon style={styles.backIcon} name="chevron-right" size={10} color="#653f90" /></TouchableOpacity>
                    </View>
                    <View style={styles.contentBox}>
                        <Icon style={styles.contentIcon} name="clock" size={20} color="#653f90" />
                        <Text style={styles.contentBoxText}>¿Cada cuanto compras comida?</Text>
                        <TouchableOpacity style={styles.touchableBtn}><Icon style={styles.backIcon} name="chevron-right" size={10} color="#653f90" /></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default withNavigation(PetDataOptions);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleSection: {
        marginTop: -60,
        padding: 20,
        width: '100%',
        backgroundColor: "#fff",
        elevation: 5,
    },
    content: {
        padding: 20,
    },
    contentBox: {
        marginBottom: 15,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 5,
    },
    contentIcon: {
        marginRight: 10,
        alignSelf: 'center',
    },
    contentBoxText: {
       color: "#653f90",
       fontSize: 16,
       fontWeight: "bold",
    },
    touchableBtn: {
        position: 'absolute',
        right: 20,
        paddingVertical: 5,
        paddingHorizontal: 8,
        alignSelf: 'center',
        backgroundColor: '#e3e5e8',
        borderRadius: 50,
    }
})