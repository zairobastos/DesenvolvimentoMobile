import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return(
    <View style={styles.container}>
      <View style={styles.lab1}>
        <Text>Quadrado 1</Text>
      </View>
      <View style={styles.lab2}>
        <Text>Quadrado 2</Text>
      </View>
      <View style={styles.lab3}>
        <Text>Quadrado 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lab1:{
    flex: 1,
    backgroundColor: '#00FFFF',
    width: 50,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginHorizontal: 8,
  },
  lab2:{
    flex: 1,
    width: 50,
    height: 75,
    backgroundColor: '#00FA9A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 8,
  },
  lab3:{
    flex: 1,
    width: 50,
    height: 75,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 8,
  }
});
