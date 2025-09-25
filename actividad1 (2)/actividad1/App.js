import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Profesor = props => {
  const randomNumber = Math.floor(Math.random() * 100 + 50);
  return (
    <View style={styles.profContainer}>
      <Image 
        style={styles.profImage}
        source={{ uri: `https://picsum.photos/${randomNumber}`, width: 100, height: 100 }}
      />
      <Text> Hello, I am {props.name} </Text>
    </View>
  );
}

export default App = () => {
  return (
    <ScrollView>
      <Profesor name="Miguel"/>
      <Profesor name="Ruben"/>
      <Profesor name="Pablo"/>
      <Profesor name= "Alejandro" />
      <Profesor name= "Alejandro" />
      <Profesor name= "Alejandro" />
      <Profesor name= "Alejandro" />
      <Profesor name= "Alejandro" />
      <Profesor name= "Alejandro" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  profImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
})
