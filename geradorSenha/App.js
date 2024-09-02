import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

import { ModalPassword } from "./src/components/modal/index"

import "@fontsource/poppins";

import { useState, useEffect } from 'react';

let charset = "abcdefghijklmnopqrstuvwxyz!#$&@%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export default function App() {

  const [senhaGerada, setSenhaGerada] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function gerarSenha() {
    let senha = ""

    for (let i = 0, n = charset.length; i < 8; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n))


    }
    setSenhaGerada(senha)
    setModalVisible(true)
  }



  return (
    <View style={styles.container}>

      <Image
        source={require("./src/img/logolock.png")}
        alt='Logo do Gerando senha automática'
        style={styles.logo}
      />

      <Text style={styles.title}>LockGen</Text>

      <TouchableOpacity style={styles.button} onPress={gerarSenha} >
        <Text style={styles.textButton}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword />
      </Modal>





    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Poppins",
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    borderRadius: 8,
    width: "70%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20

  }, textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  textSenha: {
    fontSize: 18,
    fontWeight: "bold",
  }
});