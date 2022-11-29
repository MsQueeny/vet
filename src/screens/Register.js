import { View, Text, StyleSheet, TextInput, TouchableOpacity }
  from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Material from 'react-native-vector-icons/AntDesign'

const Register = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.icon}>
          <Material style={{ position: 'absolute', left: 0, top: 2, }} name='arrowleft' color={'#fff'} size={25} onPress={() => navigation.goBack()} />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginHorizontal: 90,
              marginLeft: 40,
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
            marginBottom: 20,
            marginLeft: 1,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            marginTop: 50,
          }}>Buat Akun Baru</Text>
      </View>
      <Text style={{ fontFamily: "Roboto", fontSize: 12, color: "white", paddingTop: 15, paddingBottom: 10, }}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Username"
        placeholderTextColor="#C2CDDB" />
      <Text style={{ fontFamily: "Roboto", fontSize: 12, color: "white", paddingTop: 15, paddingBottom: 10, }}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Phone Number"
        placeholderTextColor="#C2CDDB" />
      <Text style={{ fontFamily: "Roboto", fontSize: 12, color: "white", paddingTop: 15, paddingBottom: 10, }}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        placeholderTextColor="#C2CDDB" />
      <Material style={{ position: 'absolute', right: 70, top: 450 }} name='eye' color={'#fff'} size={20} />


      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}
      style={styles.button}>
        <Text style={styles.textLogin}
          onPress={() => navigation.navigate('LoginScreen')}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Don't have an account? Please <Text style={{
        fontFamily: "Roboto",
        fontSize: 15,
        color: "#FDCB5A",
        textDecorationLine: 'underline',
        fontWeight: "bold"
      }}
        onPress={() => navigation.navigate('LoginScreen')}
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
    marginTop: 190,
    padding: 2,
  },
  input: {
    backgroundColor: '#1A3150',
    borderWidth: 1,
    fontFamily: 'Roboto',
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 12,
    marginTop: 5,
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
    marginTop: 10,
  },
  textLogin: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
  },
})
export default Register