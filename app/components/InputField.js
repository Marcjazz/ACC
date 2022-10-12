import { StyleSheet, Text, View, Platform,TextInput } from 'react-native'
import React from 'react'

const InputField = ({ value, keyboardType, placeholder, onChangeText, secret })  =>{
    return(
        <View 
            style={styles.inputGroup}
        >
            <View style={styles.container}>
                <TextInput 
                    style={[styles.input]}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={true}
                    onChangeText={() => onChangeText()}
                    value={value}/>
            </View>
        </View>
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

export default InputField;