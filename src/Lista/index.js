import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

function Lista({dados}){

    const [likeada, setLikeada] = useState(dados.likeada);
    const [curtidas, setCurtidas] = useState(dados.curtidas);

    function mostraLike(curtidas){
        if(curtidas <= 0){
            return;
        } return (
            <Text style={styles.likers} >{curtidas} {curtidas > 1 ? 'curtidas' : 'curtida'}</Text>
        )
    }

    function like(){
        if (likeada) {
            setLikeada(false);
            setCurtidas(curtidas - 1);
        } else {
            setLikeada(true);
            setCurtidas(curtidas + 1);
        }
        }

    function carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }
    

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
            
            <View style={styles.areaBtn} >
            <TouchableOpacity onPress={like} >
                <Image
                source={carregaIcone(likeada)} 
                style={styles.iconeLike}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnSend} >
                <Image
                source={require('../img/send.png')} 
                style={styles.iconeLike}/>
            </TouchableOpacity>
            </View>
            {mostraLike(curtidas)}
            <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape} >{dados.usuario}</Text>
                 <Text style={styles.descRodape} >{dados.descricao}</Text>
            </View>
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
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5
    },
    btnSend: {  
        paddingLeft:5,
    },
    iconeLike: {
        width: 28,
        height: 28
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
        color: '#000'
    },
    likers:{
        fontWeight: 'bold',
        paddingLeft: 5
    }

})

export default Lista;