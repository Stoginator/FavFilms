import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native'
import {DATA} from "./Data"

export default function MovieDisplay(props) {
    const onPress = () => followLink(DATA[props.number])
    return (
        <View style = {styles.RectangleShapeView}>
            <Text style = {styles.titleText}>{DATA[props.number].title}</Text>
            <Text style = {styles.plotText}>Directed by {DATA[props.number].director}</Text>
            <Text style = {styles.plotText}>{DATA[props.number].description}</Text>
            <TouchableOpacity onPress = {onPress}>
                <Image source = {{uri: DATA[props.number].poster}} 
                    style = {styles.posterLook} />
            </TouchableOpacity>
        </View>
    )
}

function followLink(props) {
    console.log(props.link)
    Linking.openURL(props.link)
}

const styles = StyleSheet.create({
    RectangleShapeView: {
        //To make Rectangle Shape
        flex: 1,
        borderColor: "white",
        borderWidth: 1,
        marginLeft: 0,
        marginBottom: 10,
        marginTop: 10,
        width: 205 * 2,
        height: 100,
        backgroundColor: "black",
        justifyContent: "flex-start"
    },
    titleText: {
        flex: 1,
        marginTop: 10,
        textAlign: "left",
        color: "white",
        fontStyle: "italic",
        fontWeight: "bold",
        marginRight: 90,
        marginLeft: 10
    },
    plotText: {
        flex: 1,
        marginTop: 5,
        textAlign: "left",
        color: "white",
        marginRight: 150,
        marginLeft: 10,
    },
    posterLook: {
        flex: 1,
        borderColor: "white",
        borderWidth: 1,
        left: 300,
        width: 70,
        height: 93,
        borderRadius: 25 / 2,
        bottom: 85,
    }
});