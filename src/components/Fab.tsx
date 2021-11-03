import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props {
    position: 'br' | 'bl' | 'tr';
    size?: 'sm' | 'md' | 'lg';
    title: string;
    onPress: () => void
}

const Fab = ({ size, position, title, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                position === 'br' ? styles.right : styles.left,
                size === 'sm' ? styles.sm : null,
                size === 'lg' ? styles.lg : null
            ]}>

            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Fab

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        borderRadius: 100,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sm: {
        height: 30,
        width: 30,
    },
    lg: {
        height: 70,
        width: 70,
    },
    textButton: {
        color: 'white',
        fontSize: 25
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