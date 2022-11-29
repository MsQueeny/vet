import { View, Text, StyleSheet, TextInput, TouchableOpacity } 
from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Material from 'react-native-vector-icons/AntDesign'
import Material1 from 'react-native-vector-icons/MaterialCommunityIcons'

const Login = () => {
    const [Visible, setVisible]= useState(true)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.icon}>
                    <Material style={{position: 'absolute', left: 0, top: 4, }} name='arrowleft' color={'#fff'} size={20} onPress={() => navigation.goBack()} />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            marginHorizontal: 90,
                            marginLeft: 60,
                            marginStart: 40,
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                        }} onPress={() => navigation.goBack()}>Sebelumnya</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.well} >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        marginBottom: 15,
                        marginLeft: 1,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        marginTop: 50,
                    }}>Welcome Back</Text>
            </View>
            <Text style={{ fontFamily: "Roboto", fontSize: 12, color: "white", paddingTop:15, paddingBottom:10,}}>Username</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Username"
                placeholderTextColor="#C2CDDB"/>
            <Text style={{ fontFamily: "Roboto", fontSize: 12, color: "white", paddingTop: 15, paddingBottom: 10, }}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Password" 
                placeholderTextColor="#C2CDDB"
                secureTextEntry={Visible} />
            <TouchableOpacity onPress={() => setVisible(!Visible)}>
                <View style={styles.containerPassword}> 
                <Material1 name={Visible?'eye-off':'eye'} color={'#fff'} size={20} /> 
                </View>
                </TouchableOpacity>
            <Text style={{
                fontFamily:"Roboto",
                fontSize  :12,
                color     :"#FDCB5A",
                textAlign :"right",
                textDecorationLine:'underline'}}>Forget your Password</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}
            style={styles.button}>
                <Text style={styles.textButton}
                    onPress={() => navigation.navigate('Dashboard')}>Submit</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Don't have an account? Please 
            <Text style={{
                  fontWeight: 'bold',
                    fontSize  : 15, 
                    color     : "#FDCB5A",
                    textDecorationLine:'underline'
                }}
                    onPress={() => navigation.navigate('RegisterScreen')}
                > Sign Up</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A3150',
        justifyContent: 'flex-start',
        padding: 50,
    },
    container1: {
        flex: 1,
        backgroundColor: '#1A3150',
        marginTop: 300,
        padding: 1,
        paddingHorizontal: 1,
    },
    input: {
        backgroundColor: '#1A3150',
        borderWidth: 1,
        fontFamily: 'Roboto',
        paddingHorizontal: 15,
        marginBottom: 10,
        fontSize: 12,
        marginTop: 1,
        borderColor: '#749DD2',
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#FDCB5A',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    textButton: {
        color: '#000',
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        color: "#fff",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
    },
    containerPassword: {
        position: 'absolute',
        right: 20,
        top: -45
    },
})
export default Login