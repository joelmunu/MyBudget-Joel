import { StyleSheet, View, Text } from "react-native"

const Balance = () => {
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Current balance</Text>
            <Text style={styles.balance}>999999,99 €</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff59d',
      width: 350,
      height: 350,
      marginTop: 40,
      padding: 15,
      borderRadius: 15,
      borderWidth: 1.5,
      borderColor: 'grey'
    },

    title: {
        color: 'grey',
        fontSize: 40,
        fontWeight: "bold"
    },

    balance: {
        color: 'grey',
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 35
    }

  });

export default Balance