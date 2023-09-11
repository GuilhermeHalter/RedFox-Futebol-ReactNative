import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const TimesbrList = () => {
  const [Times, setTimes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:19003/times/')
      .then(response => {
        setTimes(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os Times do Brasileirão:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text><h2>Time!</h2></Text>
      <Text>Todos os times do Brasileirão:</Text>
      <FlatList
        data={Times}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View style={styles.horarioItem}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5b2',
    paddingHorizontal: 20,
  },
  horarioItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default TimesbrList;