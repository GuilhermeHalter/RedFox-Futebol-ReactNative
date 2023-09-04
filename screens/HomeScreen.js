import React from 'react';
import LupaIcon from './img/pngwing.com.png';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.bodyContainer}>

      <ImageBackground source={require('./img/estadio.jpg')}>

        <View style={styles.container}>
          
            <View style={styles.content}>

              <Text style={styles.contentText}>Jogos da semana</Text>
              
              <View style={styles.imageRow}>
                
                <View style={styles.column}>
                  <Image source={require('./img/bahia.png')} style={styles.image} />

                  <Text style={styles.vsText}>VS</Text>

                  <Image source={require('./img/fla.png')} style={styles.image} />

                  <TouchableOpacity style={styles.CompraButton}>
                    <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
                  </TouchableOpacity>

                </View>
                
                <View style={styles.column}>

                  <Image source={require('./img/atlpr.png')} style={styles.image} />
                  <Text style={styles.vsText}>VS</Text>
                  <Image source={require('./img/coritiba.png')} style={styles.image} />

                  <TouchableOpacity style={styles.CompraButton}>
                    <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.column}>

                  <Image source={require('./img/botafogo.gif')} style={styles.image} />

                  <Text style={styles.vsText}>VS</Text>

                  <Image source={require('./img/atletico.png')} style={styles.image} />

                  <TouchableOpacity style={styles.CompraButton}>
                    <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
                  </TouchableOpacity>

                </View>

              </View>

            </View>
        </View>

      </ImageBackground>

    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    display:'flex',
    
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  menuItem: {
    padding: '20',
    color: '#fff',
    fontSize: 18,
    marginRight:10,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',

    borderBottomColor: '#ccc',
    borderRadius: 5,
  },
  lupaIcon: {
    width: 20,
    height: 20,
    marginTop:5, 
    tintColor: '#555',
  },
  searchInput: {
    borderColor: 'transparent',
    padding: 5,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    alignItems: 'center',
  },
  image: {
    width: '90px',
    height: '90px',
    marginBottom: 10,
  },
  vsText: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
  CompraButton: {
    backgroundColor: '#27ae60',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  CompraButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
