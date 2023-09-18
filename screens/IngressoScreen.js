import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const IngressoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compra de Ingresso</Text>
      <View style={styles.ticketContainer}>
        <Text style={styles.ticketTitle}>Escolha o tipo de ingresso:</Text>
        <TouchableOpacity style={styles.ticketOption}>
          <Text style={styles.optionText}>Ingresso Padrão</Text>
          <Text style={styles.optionPrice}>R$ 50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ticketOption}>
          <Text style={styles.optionText}>Ingresso VIP</Text>
          <Text style={styles.optionPrice}>R$ 100</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ticketOption}>
          <Text style={styles.optionText}>Ingresso Premium</Text>
          <Text style={styles.optionPrice}>R$ 150</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.total}>Total: R$ 50</Text>
      <Text style={styles.instructions}>Toque em um ingresso para comprar.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  ticketContainer: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  ticketTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  ticketOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  optionPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800000',
  },
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
  },
});

export default IngressoScreen;