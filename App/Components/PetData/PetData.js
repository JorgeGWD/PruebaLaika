import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PetImage from '../../../assets/perrito.png';
import Tamano from '../../../assets/tamano.png';
import Edad from '../../../assets/edad.png';
import Raza from '../../../assets/raza.png';

class PetData extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.contentBox, styles.contentBoxTop]}>
                    <Image style={styles.petImg} source={PetImage} />
                    <Text style={styles.petName}>Mau Doe</Text>
                    <View style={styles.petData}>
                        <TouchableOpacity>
                            <Image style={styles.petDataIcon} source={Tamano} />
                            <Text style={styles.petDataTitle}>Tamaño</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.petDataIcon} source={Edad} />
                            <Text style={styles.petDataTitle}>Edad</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.petDataIcon} source={Raza} />
                            <Text style={styles.petDataTitle}>Raza</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.petDataBtn} onPress={()=>{ this.props.navigation.navigate('Options')}}>
                        <Text style={styles.petDataBtnTxto}>Compretar datos de mascota</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.contentBox, styles.createEvent]}>
                    <Text style={styles.createEventText}>Crear evento</Text>
                    <TouchableOpacity style={styles.touchableBtn}><Icon style={styles.backIcon} name="chevron-right" size={10} color="#653f90" /></TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default withNavigation(PetData);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    contentBox: {
        marginBottom: 15,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 5,
    },
    contentBoxTop: {
        marginTop: 80,
    },
    petImg: {
        marginTop: -70,
        width: 100,
        height: 100,
        alignSelf: 'center',
        backgroundColor: "#ccc",
        borderRadius: 50,
    },
    petName: {
        marginVertical: 10,
        color: "#653f90",
        fontSize: 22,
        fontWeight: "bold",
        alignSelf: "center",
    },
    petData: {
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    petDataIcon: {
        width: 80,
        height: 100,
        backgroundColor: "#653f90",
        borderRadius: 5,
    },
    petDataTitle: {
        color: "#653f90",
        alignSelf: "center",
    },
    petDataBtn: {
        padding: 10,
        borderWidth: 2,
        borderColor: "#653f90",
    },
    petDataBtnTxto: {
        color: "#653f90",
        fontSize: 18,
        alignSelf: 'center',
    },
    createEvent: {
        flexDirection: 'row',
    },
    createEventText: {
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
  });