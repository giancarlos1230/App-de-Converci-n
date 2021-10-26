/* import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CounterScreen = () => {

    const [cantidad, setCantidad] = useState(20)

    const handlePlus = ()  => {
        setCantidad(cantidad + 1)
    }
    const handlesmenos = () => {
        setCantidad(cantidad - 1)

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {cantidad}
            </Text>

            <TouchableOpacity 
            onPress={handlePlus} style={[
                styles.button, 
                styles.right]}>
                <Text style={styles.textButton}>+1</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={handlesmenos} style={[styles.button,styles.left]}>
                <Text style={styles.textButton}>-1</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CounterScreen
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'coral',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 40,
        color: 'white'
    },

    button: {
        backgroundColor: 'blue',
        borderRadius: 100,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textButton: {
        color: 'white',
        fontSize: 30,
    },
    right: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    left: {
        position: 'absolute',
        bottom: 20,
        left: 20
    }

})
 */