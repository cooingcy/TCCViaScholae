import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native'

export const ButtonContinue = () => {
  const navigation = useNavigation()
  return(
     <TouchableOpacity style={styles.buttonContinue} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonContinueText}>Continue</Text>
     </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  //Estilização do botão Continue
  buttonContinue: {
    backgroundColor: "#262626", //Cor do fundo
    paddingVertical: 10, //Espaçamento interno vertical
    paddingHorizontal: 20, //Espaçaento interno horizontal
    width: 210, //Largura do botão
    alignItems: "center", //Centraliza o texto do botão
    marginBottom: 20, //Margem inferior
    borderRadius: 20, //Borda arredondando
    alignSelf: "center", //Centraliza o botão
  },

  //Estilização do texto do botão Continue
  buttonContinueText: {
    color: "#eeeeee", //Cor do texto
    fontSize: 16, //Tamanho da fonte
  },
});