import axios from 'axios';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,FlatList} from 'react-native';

export default function App() {

  const [texto,setTexto] = useState('');
  const [valores,setValores] = useState(new Object());

  const getSite = () => {

    axios
    .get('https://hn.algolia.com/api/v1/search?query=' + texto)
    .then(function (response){
      setValores(Object.values(response.data)[0])
      console.log(Object.values(valores)[0]);
    })
    .catch(function (error){
      console.log(error.message);
    })
    .finally(function(){
      console.log('final do called');
    })

  }


const Item = ({ title,autor,url }) => (
  <View style={styles.item}>
    <Text style={styles.title}>Titulo: {title}</Text>
    <Text style={styles.title}>Autor: {autor}</Text>
    <Text style={styles.title}>Url: {url}</Text>
  </View>
);

const renderItem1 = ({ item }) => (
  <Item title={item.title} autor={item.author} url={item.url}/>
);



  return (
    <View style={styles.container}>
        <View style={styles.vi1}>
          <TextInput placeholder='Digite seu nome' onChangeText={texto => setTexto(texto)}></TextInput>          
        </View>
        <Button onPress={getSite} title="Enviar requisição"></Button>
        <FlatList
          styles={styles.vi2}
          data = {valores}
          renderItem = {renderItem1}
          keyExtractor={function (item) {
          return item.author + item.title + item.url;
          }
        }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  vi1: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    minHeight: 300,
    minWidth: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vi2: {
    flex: 0,
    backgroundColor: '#f9c2ff', 
    marginHorizontal: 16,
    marginVertical: 8,
  },
  item: {
    flex: 2,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});