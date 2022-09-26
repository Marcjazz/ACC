import { StyleSheet, Text, View, KeyboardAvoidingView, Platform,TextInput } from 'react-native'
import React from 'react'

const LoginInput = ()  =>{
    return(
        <KeyboardAvoidingView 
        style={styles.inputGroup}
        behavior={Platform.OS==="ios" ? "padding" : "height"} 
        >
         
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="identifiant" placeholderTextColor="black"

        />
        </View>
    
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Mot de passe"  secureTextEntry placeholderTextColor="black"

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
        padding:18,
        borderColor:"black",
        borderWidth:2,
        marginBottom:9,
        fontSize:18,
        borderRadius:229,
        marginTop:1,
        
        
    },
    container:{
        width:"85%",
        padding:4,
        marginTop:10,
        
    },
});

export default LoginInput;