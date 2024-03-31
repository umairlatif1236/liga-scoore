import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setPassword] = useState('');

  const handleFormSubmit = () => {
   
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', message);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={{ height: 100, width:350, borderColor: 'gray', borderWidth: 1, paddingBottom: 50 }}
        placeholder="Enter your message"
        value={message}
        onChangeText={setPassword}
      
      />
      <Button title="send" onPress={handleFormSubmit} />
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
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Form;