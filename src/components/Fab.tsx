import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

inferface Props {
    position: 'br' | 'bl'
    size ?: 'sm' | 'md' | 'lg';
    title: String;
    onPress: () => void
}

const Fab = ({ size, position, title, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                position === 'br' ? styles.right : styles.left,
                size === 'sm' ? styles.sm : null
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
        with: 30,
    },
    lg: {
        height: 70,
        with: 70,
    },
})