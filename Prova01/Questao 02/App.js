import React, { useState } from 'react';
import { Container, Header, Content, Body, Title, View} from 'native-base';
import { Button, StyleSheet } from 'react-native';

export default function App() {
  const [cont,setCont] = useState (0);
  const incremento = () => setCont (cont => cont +1);
  return (
  <Container>
    <Header>
      <Body>
       <Title>You've pressed the button: {cont}</Title> 
      </Body>
    </Header>
    <Content>
      <View style = {styles.container} >
      <Button title='Aperte' onPress={incremento}></Button>
      </View>
    </Content>
  </Container>
  );
}

const styles = StyleSheet.create({
  container:{
  backgroundColor: '#F5FCFF',
  flex: 3,
  justifyContent: 'center'
  },
});