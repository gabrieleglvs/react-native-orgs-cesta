import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto( { children, style } ) {

    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
    //ta recebendo o que ta dentro da tag <texto></texto> e aplicando a font Montserrat. eu pego tbm o 'style' que é o estilo que eu tinha definido primeiro para esse texto lá no Cesta.js
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal', 
    }
})