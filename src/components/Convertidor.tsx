import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

 const Convertidor = () => {
    const [origen, setOrigen] = useState('NIO')
    const [destino, setDestino] = useState('USD')
    const [cantidadConvertir, setCantidadConvertir] = useState<number>(0)
    const [resultado, setResultado] = useState<number>(0)

    const [error, setError] = useState<boolean>(false)

    const tcDolar: number= 35.3
    const tcEuro: number= 40.22
    const tcEuroDolar: number= 1.24


    const handleCantidad = (texto: string) => {
        const cant = parseFloat(text)
        if (isNan(cant)) {
            setError(true)
        } else {
            setError(false)
        }
        setCantidadConvertir(cant)
    }

    const handleConvertir = () => {
        if (!cantidadConvertir){
            alert('Se require la cantidad que desea convertir')
            return
        }

        if (origen === 'NIO' && destino === 'USD') {
            setResultado (cantidadConvertir / tcDolar)
        }
        if (origen === 'USD' && destino === 'NIO') {
            setResultado (cantidadConvertir * tcDolar)
        }


        if (origen === 'NIO' && destino === 'EUR') {
            setResultado (cantidadConvertir / tcEuro)
        }
        if (origen === 'EUR' && destino === 'NIO') {
            setResultado (cantidadConvertir * tcEuro)
        }


        if (origen === 'USD' && destino === 'EUR') {
            setResultado (cantidadConvertir / tcEuroDolar)
        }
        if (origen === 'EUR' && destino === 'USD') {
            setResultado (cantidadConvertir * tcEuroDolar)
        }
        
    }
    
    return (

        <View style={Styles.container}>

        <FormInput title="Cantidad"
            defaultValue={cantidadConvertir.toString()}
            onChangeText={handleCantidad}
            handleError={error}
            errorMenssage="Solo se admiten numeros"
            />


        <FormInput title="Moneda de Origen"
            defaultValue={origen}
            onChangeText={setOrigen}
            />

        <FormInput title="Moneda de Destino"
            defaultValue={destino}
            onChangeText={setDestino}
            />

        <Fab title="CV" position="tr" onPress={handleConvertir} />

        <View style={styles.button}>
            <Button
                disabled={error}
                onPress={handleConvertir}
                title="Convertir"

            />
    </View>

        <Text
        style={[styles.label, styles.resultado]}>
            {resultado.toFixed(2)}
            </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
        label: {
            color: 'red'
    },
        input:
        {
            borderColor: 'red',
            borderWidth: 2,
            paddingHorizontal: 10,
            paddingVertical: 5,
        },
        resultado: {
            alignSelf: 'center',
            fontSize: 40
        },

    button: {
        marginTop: 10,
    }

})
    
export default Convertidor