import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
}from 'react-native';
import Cartao from './Cartao';
const PrevisaoItem = (props) => {
  return (
    <Cartao estilos={estilos.cartao}>
      <View style={estilos.tela}>
      <Text>{console.log(props)}</Text>
          <Image 
            style={estilos.imagem}
            source={{uri: "https://openweathermap.org/img/wn/" + props.weather.icon + ".png"}}
          />
          <View>
          
            <View style={estilos.primeiraLinha}>
               <Text>Sunset = {new Date(props.previsao.sunset * 1000).toLocaleTimeString()}</Text>
             </View>

            <View style={estilos.segundaLinha}>
               <Text> Sunrise = {new Date(props.previsao.sunrise * 1000).toLocaleTimeString()}</Text>
            </View>
            <View style={estilos.segundaLinha}>
              <Text> Feels Like = {props.previsao.feels_like}</Text>
            </View>

          </View>
      </View>
    </Cartao>
  )
}

const estilos = StyleSheet.create ({
  primeiraLinha: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  segundaLinha: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  }, 
  cartao: {
    marginBottom: 8
  },
  tela: {
    flexDirection: 'row'
  },
  imagem: {
    width: 50,
    height: 50
  },
  valor: {
    marginHorizontal: 2
  }
});
export default PrevisaoItem;