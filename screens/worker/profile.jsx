import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    // Estado para almacenar los datos del usuario y sus cambios
    const [userData, setUserData] = useState({
      email: 'a',
      password: '12345',
      phoneNumber: '1234567890',
    });
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  // Función para manejar el cambio en el número de teléfono
  const handleChangePhoneNumber = (text) => {
    setUserData((prevState) => ({ ...prevState, phoneNumber: text }));
  };
  
  // Función para manejar el cambio en la contraseña
  const handleChangePassword = (text) => {
    setUserData((prevState) => ({ ...prevState, password: text }));
  };



  // Función para guardar los cambios en los datos del usuario
  const handleSaveChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en la base de datos
    console.log('Datos actualizados:', userData);
  };

  
  // Función para manejar el cambio en el correo electrónico
  const handleChangeEmail = (text) => {
    setUserData((prevState) => ({ ...prevState, email: text }));
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="person" size={180} color="black" marginVertical={50} />
            {/* Campo de contraseña */}
            <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={userData.password}
          onChangeText={handleChangePassword}
        />
      </View>

      {/* Campo de número de teléfono */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número de teléfono:</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de teléfono"
          keyboardType="numeric"
          value={userData.phoneNumber}
          onChangeText={handleChangePhoneNumber}
        />
      </View>
            {/* Campo de correo electrónico */}
            <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo electrónico:</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={userData.email}
          onChangeText={handleChangeEmail}
        />
      </View>
      {/* Botones para guardar los cambios y cerrar sesión en línea */}
      <View style={styles.buttonContainer}>
        <Button title="Guardar cambios" onPress={handleSaveChanges} />
        <Button title="Cerrar sesión" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 40,
  },
});

export default Profile;
