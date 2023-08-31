import React from 'react';
import LupaIcon from './img/pngwing.com.png'; 
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.menuItem}>Home</Text>
        <View style={styles.searchBar}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <Image source={LupaIcon} style={styles.lupaIcon} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Jogos da semana</Text>
        
        <View style={styles.imageRow}>
          
          <View style={styles.column}>
            <Image source={require('./img/pngfind.com-bite-mark-png-631239.png')} style={styles.image} />
            <Text style={styles.contentText}>VS</Text>
            <Image source={require('./img/pngfind.com-bite-mark-png-631239.png')} style={styles.image} />
            <TouchableOpacity style={styles.CompraButton}>
              <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>

          </View>
          
          <View style={styles.column}>
            <Image source={require('./img/pngfind.com-bite-mark-png-631239.png')} style={styles.image} />
            <Text style={styles.contentText}>VS</Text>
            <Image source={require('./img/pngfind.com-bite-mark-png-631239.png')} style={styles.image} />
            <TouchableOpacity style={styles.CompraButton}>
              <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <Image source={require('./img/pngfind.com-bite-mark-png-631239.png')} style={styles.image} />
            <Text style={styles.contentText}>VS</Text>
            <Image source={require('./img/pngfind.com-bite-mark-png-631239.png')} style={styles.image} />
            <TouchableOpacity style={styles.CompraButton}>
              <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#f2f2f2',
    maxWidth:1000,
  },
  menu: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#3498db',
  },
  menuItem: {
    color: '#fff',
    fontSize: 16,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  lupaIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop:5, 
    marginLeft:190,
    position: 'absolute',
  },
  searchInput: {
    height: 30, 
    borderColor: '#ccc',
    borderWidth: 1,
    paddingRight: 30,
    padding: 5, 
  },
  content: {
    justifyContent: 'center',
    display:'flex',
  },
  contentText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign:'center',
    marginTop:10,
  },
  column: {
    display:'flex',
    flexDirection:'row',
    
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    
  },
  image: {
    width: 45,
    height: 45,
    marginBottom: 20,
    
  },
   CompraButton: {
    display:'flex',
    position:'absolute',
    marginTop:70,
    marginLeft:10,
    backgroundColor: '#27ae60',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  CompraButtonText: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
