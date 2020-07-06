import React from 'react'
import {SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native'
import MovieDisplay from "./Button"

export default function App() {
    return (
        <SafeAreaView style = {styles.topBackground}>
            <Text style = {styles.topText}> My Favorite Movies of All Time </Text>
            <ScrollView>
                <MovieDisplay number = {0}/>
                <MovieDisplay number = {1}/>
                <MovieDisplay number = {2}/>
                <MovieDisplay number = {3}/>
                <MovieDisplay number = {4}/>
                <MovieDisplay number = {5}/>
                <MovieDisplay number = {6}/>
                <MovieDisplay number = {7}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topBackground: {
        flex: 1,
        backgroundColor: "black"
    },
    topText: {
        flex: 0,
        justifyContent: "center",
        color: "white",
        textAlign: "center", /* Same as left: 100 */
        fontStyle: "italic",
        fontWeight: "bold"
    },
});