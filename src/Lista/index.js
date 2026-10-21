import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function Lista({dados}){
    return(
        <View style={styles.areaFeed} >
            <View style={styles.viewPerfil} >
            <Image 
            source={{uri: dados.fotoPerfil}}
            style={styles.fotoPerfil}
            />

            <Text style={styles.nomeUsuario} >{dados.usuario}</Text>
            </View>
            <Image 
            resizeMode="cover"
            source={{uri: dados.imagem}}
            style={styles.fotoPublicao}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    areaFeed: {

    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
        paddingLeft: 5
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    fotoPublicao: {
        flex: 1,
        height: 400
    }

})

export default Lista;