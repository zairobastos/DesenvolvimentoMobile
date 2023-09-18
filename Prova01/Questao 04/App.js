import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {

  const [texto,setTexto] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.vi1}>
          <TextInput placeholder='Digite seu nome' onChangeText={texto => setTexto(texto)}></TextInput>
        </View>
        <View style={styles.vi2}>
          <Text>Seu texto é: {texto}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  vi1: {
    flex: 2,
    backgroundColor: '#F0F8FF',
    height: 0,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vi2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
