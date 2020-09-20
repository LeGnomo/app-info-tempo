import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  FlatList, 
  Button, 
  Keyboard } 
  from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState([]);
  const [cidade, setCidade] = useState ('');
  const [previsoes, setPrevisoes] = useState ([]);
  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }



  const getCity = (lat,lon) =>{
    setCity({});
    const target2 = "https://api.openweathermap.org/data/2.5/onecall?lang=pt_br&units=metric&lat=" +lat + "&lon=" +lon+ "&apikey=" +apiKey;
    fetch(target2)
    .then((dados)=>{
      return dados.json()
    })
    .then((dados)=>{
      setCity(dados.current);
      setWeather(dados.current.weather[0]);
    })
  }


  const obterPrevisoes = () => {
    setPrevisoes([]);
    const target = endPoint + cidade + "&appid=" + apiKey;
    fetch(target)
    .then((dados) => {
      return dados.json()
    })
    .then((dados) => {  
      setPrevisoes(dados.list);
      getCity(dados.city.coord.lat,dados.city.coord.lon);

    });
    
  };

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  const apiKey = 'a9c5de696d1f9a0eedbdf5d59cb62315';
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput 
          style={styles.nomeCidade}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button 
          title="ok"
          onPress={obterPrevisoes}
        />
      </View>
        <PrevisaoItem 
          previsao = {city}
          weather = {weather}
        />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFF'
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8 
  },
  nomeCidade: {
    padding: 12,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
  }
});
