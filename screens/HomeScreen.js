import React from 'react';
import LupaIcon from './img/pngwing.com.png';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.bodyContainer}>


        <View style={styles.container}>
          <View style={styles.menu}>
            <Text style={styles.menuItem}>Home</Text>
            <View style={styles.searchBar}>
              <TextInput placeholder="Search" style={styles.searchInput} />
              <Image source={LupaIcon} style={styles.lupaIcon} />
            </View>
          </View>
        </View>

      

        <View style={styles.container}>

        <ImageBackground source={require('./img/estadio.jpg')}>
          
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

            </ImageBackground>

        </View>


    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    margin: 0
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'gray',
    padding:'20px',
  },
  menuItem: {
    padding: '20',
    color: '#fff',
    fontSize: 18,
    marginRight:10,
    color:'black',
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
    alignItems: 'center',
    padding: '30px'
  },
  contentText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  imageRow: {
    justifyContent: 'space-between',
    display: 'flex',
    padding:'10px'
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
