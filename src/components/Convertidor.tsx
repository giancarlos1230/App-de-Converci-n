import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

export const Convertidor = () => {
    const [origen, setOrigen] = useState('cm')
    const [destino, setDestino] = useState('mt')
    const [convertir, setConvertir] = useState(0)
    const [resultado, setResultado] = useState(0)

    // const handleChangeOrigen = (texto: string) => {
    //alert(texto)
    //     setOrigen(texto)
    //  }

    const handleChangeConvertir = (texto: string) => {
        const numero = parseFloat(texto)
        //alert(texto)
        setConvertir(numero)
    }

    const handleCalcular = () => {
        if (origen === 'cm' && destino === 'mt') {
            const result = convertir / 100
            setResultado(result)
        }

        if (origen === 'km' && destino === 'mt') {
            const result = convertir / 100
            setResultado(result)
        }
        if (origen === "ml" && destino === "cm") {
            const result = convertir / 10;
            setResultado(result)
        }
        if (origen === "ml" && destino === "mt") {
            const result = convertir / 1000;
            setResultado(result)
        }
        if (origen === "ml" && destino === "km") {
            const result = convertir / 1000000;
            setResultado(result)
        }
        if (origen === "cm" && destino === "ml") {
            const result = convertir * 10;
            setResultado(result)
        }
        if (origen === "cm" && destino === "mt") {
            const result = convertir * 100;
            setResultado(result)
        }
        if (origen === "cm" && destino === "km") {
            const result = convertir * 100000;
            setResultado(result)
        }
        if (origen === "mt" && destino === "ml") {
            const result = convertir * 1000;
            setResultado(result)
        }
        if (origen === "mt" && destino === "cm") {
            const result = convertir * 100;
            setResultado(result)
        }
        if (origen === "mt" && destino === "km") {
            const result = convertir / 1000;
            setResultado(result)
        }
        if (origen === "km" && destino === "ml") {
            const result = convertir * 1000000;
            setResultado(result)
        }
        if (origen === "km" && destino === "cm") {
            const result = convertir * 100000;
            setResultado(result)
        }
        if (origen === "km" && destino === "mt") {
            const result = convertir * 1000;
            setResultado(result)
        }

    }


    //proxima clasae hacer >>>>>> milimitros, centimetros metros y kilometros todos a en sus conjugaciones
}
return (

    <View>
        <Text>Origen</Text>

        <TextInput
            defaultValue={origen}
            style={styles.input}
            maxLength={2}
            onChangeText={setOrigen}
        />
        <Text>Destino</Text>
        <TextInput
            defaultValue={destino}
            style={styles.input}
            onChangeText={setDestino}
        />

        <Text>Convertir</Text>
        <TextInput
            defaultValue={convertir.toString()}
            style={styles.input}
            onChangeText={
                (text) => handleChangeConvertir(text)
            }
        />

        <Text>Resultado</Text>
        <TextInput
            defaultValue={resultado.toString()}
            style={styles.input}
        />

        <View style={styles.button} />
        <Button
            title="Calcular"
            onPress={handleCalcular} />
    </View>
)
}

const styles = StyleSheet.create({

    button: {
        marginTop: 10,
    },

    //no neccerariamente se tiene que llamar input puede tener otro nombre.
    input:
    {
        borderWidth: 3,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: 'black'
    }


})
