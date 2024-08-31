//Importa o React
import React from 'react'
//Importa os componentes do React-Native
import { View, Text, StyleSheet } from 'react-native'
import { ProfilePic, ButtonChildren, ButtonEdit, ButtonSettings } from '../../components'

export const AccountScreen = () => {
  return (
    //Container princiapl
    <View style={styles.container}>
      {/* Conteiner do profile*/}
      <View style={styles.profileContainer}>
        {/* Foto */}
        <View style={styles.profilePic}>
          {/* Adiciona a foto*/}
          <ProfilePic />
        </View>
        {/* Nome */}
        <Text style={styles.profileName}>Matheus Romano</Text>
      </View>

      {/* Container dos botoes */}
      <View style={styles.buttonsContainer}>
        <ButtonChildren></ButtonChildren>
        <ButtonEdit></ButtonEdit>
      </View>

      {/* linha */}
      <View style={styles.linha} />

      {/* Container Settings */}
      <ButtonSettings></ButtonSettings>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Cor de fundo atrás da foto
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },

  profileName: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },

  linha: {
    height: 2,
    backgroundColor: '#D2A236',
    marginVertical: 20,
  },

})
