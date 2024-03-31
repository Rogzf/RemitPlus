import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoanAplication = () => {
  const [nombre, setNombre] = useState('');
  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('');
  const handleSubmit = () => {
    console.log('Datos del formulario enviados:', { nombre, monto, plazo });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto solicitado"
        value={monto}
        onChangeText={setMonto}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Plazo deseado (en meses)"
        value={plazo}
        onChangeText={setPlazo}
        keyboardType="numeric"
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default LoanAplication;
