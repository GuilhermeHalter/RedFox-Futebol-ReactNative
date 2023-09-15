import React from 'react';
import LupaIcon from './img/pngwing.com.png';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import TimesbrList from '../components/TimesList'


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
          
            <View style={styles.content}>

              <Text style={styles.contentText}>Jogos da semana</Text>
              
              <View style={styles.imageRow}>
                
                <View style={styles.column}>
                  <Image source={require('./img/América Mineiro.png')} style={styles.image} />

                  <Text style={styles.vsText}>VS</Text>

                  <Image source={require('./img/Flamengo.png')} style={styles.image} />

                  <TouchableOpacity style={styles.CompraButton}>
                    <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
                  </TouchableOpacity>

                </View>
                
                <View style={styles.column}>

                  <Image source={require('./img/São Paulo.png')} style={styles.image} />
                  <Text style={styles.vsText}>VS</Text>
                  <Image source={require('./img/Santos.png')} style={styles.image} />

                  <TouchableOpacity style={styles.CompraButton}>
                    <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.column}>

                  <Image source={require('./img/Vasco da Gama.png')} style={styles.image} />

                  <Text style={styles.vsText}>VS</Text>

                  <Image source={require('./img/Corinthians.png')} style={styles.image} />

                  <TouchableOpacity style={styles.CompraButton}>
                    <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.column}>
                  <Image source={require('./img/Fortaleza.png')} style={styles.image} />

                  <Text style={styles.vsText}>VS</Text>

                  <Image source={require('./img/Palmeiras.png')} style={styles.image} />

                  <TouchableOpacity style={styles.CompraButton}>
                    <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.column}>
                  <Image source={require('./img/Internacional.png')} style={styles.image} />

                  <Text style={styles.vsText}>VS</Text>

                  <Image source={require('./img/Red Bull Bragantino.png')} style={styles.image} />

                  <TouchableOpacity style={styles.CompraButton}>
                    <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.column}>
                  <Image source={require('./img/Grêmio.png')} style={styles.image} />

                  <Text style={styles.vsText}>VS</Text>

                  <Image source={require('./img/Cruzeiro.png')} style={styles.image} />

                  <TouchableOpacity style={styles.CompraButton}>
                    <Text style={styles.CompraButtonText}>Comprar ingresso</Text>
                  </TouchableOpacity>

                </View>

              </View>

            

            </View>


        </View>

          <TimesbrList />
    </View>

  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1, },
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1, 
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20, 
  },
  menuItem: {
    padding: 20, 
    color: '#fff',
    fontSize: 18,
    marginRight: 10,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderRadius: 5,
    flex: 1, 
  },
  lupaIcon: {
    width: 20,
    height: 20,
    marginTop: 5,
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
    padding: 30, 
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
    flexWrap: 'wrap', 
    padding: 10,
  },
  column: {
    alignItems: 'center',
    padding: 10,
    flexBasis: '48%', 
  },
  image: {
    width: 90, 
    height: 90, 
    marginBottom: 10,
  },
  vsText: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
  CompraButton: {
    backgroundColor: '#800000',
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