import { StyleSheet, Text, View } from 'react-native';
import Balance from './Components/Balance/Balance';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Balance></Balance>
      </View>
      <View style={styles.body}>
        <Text>Body por hacer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lemonchiffon',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 1
  },

  body: {
    flex: 3
  }
});
