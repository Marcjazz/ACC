import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Platform } from 'react-native'
import React from 'react'



const Input = ()  =>{
    return(
        <KeyboardAvoidingView 
        style={styles.inputGroup}
        behavior={Platform.OS==="ios" ? "padding" : "height"} 
        >
         
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nom" placeholderTextColor="black"

        />
        </View>
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="prenom"  placeholderTextColor="black"
        />
        </View>
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="email" placeholderTextColor="black"
        />
        </View>
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Mot de passe"  secureTextEntry placeholderTextColor="black"
        />
        </View>  
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="numero de telephone"  secureTextEntry placeholderTextColor="black"
        />
        </View>    
        </KeyboardAvoidingView>
    );
}

const styles=StyleSheet.create({
    inputGroup:{
        flexDirection:"column", 
        justifyContent: "center",
        alignItems:"center"
    },
    input:{
        padding:14,
        borderColor:"black",
        borderWidth:2,
        marginBottom:7,
        fontSize:19,
        borderRadius:229,
        
    },
    container:{
        width:"85%",
        padding:4,
    },
});

export default Input