import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useColorScheme } from 'nativewind';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View style={colorScheme === 'dark' ? styles.containerDark : styles.container}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View style={styles.switchContainer}>
        <Text style={[styles.text, colorScheme === 'dark' ? styles.textWhite : styles.textBlack]}>Dark Mode</Text>
        <Switch 
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={colorScheme === 'dark' ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleColorScheme}
          value={colorScheme === 'dark'}
        />
      </View>
      
      <Text style={[styles.description, colorScheme === 'dark' ? styles.textWhite : styles.textBlack]}>
      Karanlık mod, kullanıcı deneyimini geliştirmek ve özellikle düşük ışık koşullarında göz yorgunluğunu azaltmak için önemli bir özelliktir. Ayrıca, OLED ekranlar kullanıldığında enerji tasarrufu sağlayabilir.Karanlık mod, kullanıcı deneyimini geliştirmek ve özellikle düşük ışık koşullarında göz yorgunluğunu azaltmak için önemli bir özelliktir. Ayrıca, OLED ekranlar kullanıldığında enerji tasarrufu sağlayabilir.      </Text>
      <View style={[styles.card, colorScheme === 'dark' ? styles.cardDark : styles.cardLight]}>
        <Text style={[styles.cardText, colorScheme === 'dark' ? styles.textWhite : styles.textBlack]}>
          
Bu kod, React Native ve NativeWind kullanarak bir mobil uygulama için basit bir karanlık mod desteği sağlar..
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F3',
  },
  containerDark: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginRight: 10,
  },
  textWhite: {
    color: '#FFF',
  },
  textBlack: {
    color: '#000',
  },
  description: {
    textAlign: 'center',
    maxWidth: '80%',
    marginBottom: 20,
  },
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginBottom: 20,
  },
  cardDark: {
    backgroundColor: '#333',
    shadowColor: '#FFF',
  },
  cardLight: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
