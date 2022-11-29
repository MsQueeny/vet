import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

const Typing = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}
        style={styles.icon1}>
          <Icon name='arrow-left' color={'#fff'} size={20} />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              bottom: 4,
              marginLeft: 10,
              marginStart: 15,
              fontFamily: 'Roboto',
              fontStyle: 'normal',
            }} onPress={() => navigation.navigate('Profile')}>Kembali</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={{
          position: 'relative',
          marginVertical: 3,
          justifyContent: 'center',
          top: 680
        }}>
          <TextInput
            style={{
              backgroundColor: '#F1F1F1',
              width: 370,
              height: 48,
              left: 12,
              padding: 1.5,
              borderRadius: 6,
              color: '#000',
              fontSize: 17,
              paddingLeft: 40
              
            }}
            placeholder='Type your message here'
            placeholderTextColor={'#CACACA'}
          />
          <Icon
            style={{
              position: 'absolute',
              left: 340,
              bottom: 10
            }} onPress={() => navigation.navigate('Pesan')}
            size={22}
            color={'#CACACA'}
            name='send'
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    position: 'absolute',
    width: 400,
    height: 90,
  },
  icon: {
    flexDirection: 'row',
    marginTop: 35,
    marginStart: 25
  },
  icon1: {
    flexDirection: 'row',
    marginTop: 20,
    marginStart: 25
  },
  atas: {
    backgroundColor: '#1A3150',
    height: 50
  },
})
export default Typing