import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Orders = () => {
  const navigation = useNavigation();

  // Datos de ejemplo de los pedidos con latitud y longitud
  const ordersData = [
    { pedido: 'Arturo', status: 'En proceso', latitud: 18.624624243, longitud: -99.18820521453638 }, //Zapata
    { pedido: 'Karla', status: 'En proceso', latitud: 18.86452524, longitud: -99.3345343656 }, //3 de Mayo
    { pedido: 'Miguel', status: 'En proceso', latitud: 18.92342343248972, longitud: -99.23500950165311 }, //Cuernavaca
    { pedido: 'Luis', status: 'En proceso', latitud: 18.8512434252, longitud: -99.18820521453638 }, //Zapata
    { pedido: 'Angel', status: 'En proceso', latitud: 18.8234426, longitud: -99.2099234234778 }, //3 de Mayo
    { pedido: 'Jose', status: 'En proceso', latitud: 18.9232234234272, longitud: -99.23500950165311 }, //Cuernavaca
  ];

  // Renderizar una tarjeta de pedido
  const renderOrderCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleOrderPress(item.latitud, item.longitud)}>
      <Text style={styles.text1}>Pedido de:</Text>
      <Text style={styles.text}>{item.pedido}</Text>
    </TouchableOpacity>
  );

  // Función para manejar la navegación a la pantalla OrderMaps con la ubicación del pedido
  const handleOrderPress = (latitud, longitud) => {
    navigation.navigate('OrderMaps', { latitude: latitud, longitude: longitud });
  };

  // Filtrar los pedidos con estado "En proceso"
  const ordersInProgress = ordersData.filter(item => item.status === 'En proceso');


  return (
    <View style={styles.container}>
      <FlatList
        data={ordersInProgress}
        renderItem={renderOrderCard}
        keyExtractor={(item) => item.pedido.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 35,
    marginBottom: 15,
    marginHorizontal: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 3,
  },
});

export default Orders;
