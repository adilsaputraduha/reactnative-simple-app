import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersegiPanjang from './src/screen/PersegiPanjang';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flex: 8, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{marginVertical: 10}}></View>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('PersegiPanjang')}>
          <Text
            style={{
              padding: 20,
              color: 'white',
              fontSize: 15,
            }}>
            Hitung Keliling & Luas Persegi Panjang
          </Text>
        </TouchableOpacity>
        <View style={{marginVertical: 10}}></View>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            borderRadius: 10,
          }}
          onPress={() => pesan()}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              padding: 20,
            }}>
            Alert
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Created by : Adil Saputra Duha</Text>
      </View>
    </View>
  );
}

const pesan = nama => {
  Alert.alert('Selamat', 'Alert Sukses', [
    {
      text: 'Cancel',
      onPress: () =>
        console.log('Hallo ' + nama + 'Anda Menekan Tombol Cancel'),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => console.log('Hallo ' + nama + 'Anda Menekan Tombol OK'),
    },
  ]);
};

const st = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <st.Navigator>
        <st.Screen name="Home" component={HomeScreen}></st.Screen>
        <st.Screen name="PersegiPanjang" component={PersegiPanjang}></st.Screen>
      </st.Navigator>
    </NavigationContainer>
  );
}

export default App;
