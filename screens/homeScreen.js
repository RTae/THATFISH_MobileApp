import React, { useState, useEffect } from "react";
import * as Font from 'expo-font'
import { StyleSheet, Text, View} from 'react-native';
import { AuthContext } from '../components/context'
import { Button } from '../components/Button'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Firebase } from '../components/Firebase'

export const HomeScreen = () =>{
  
  const { signOut } = React.useContext(AuthContext);


  useEffect(() =>{
    _loadFont()
  },[])

  const _loadFont = async () =>{
    await Font.loadAsync({
      Layiji: require('../assets/fonts/Layiji.ttf'),
    })
  }

  const onPressSigOut = () => {
    signOut()
  }
    
  return (
      <SafeAreaView style = {styles.container} >
          <View style = {styles.containerDetail}>
            <View style = {styles.logoContainer}>
              <Text style = {styles.logoText}>THATFISH</Text>
            </View>

            <Button
              title = {'ออกจากระบบ'}
              onPress = {() => onPressSigOut()}
            />
          </View>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex : 1,
      backgroundColor: '#FFF',
    },

    containerDetail:{
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor: '#FFF',
    },

    logoContainer:{
        alignItems: 'center',
    },

    logo : {
        width:200,
        height:200
    },

    logoText: {
        color: 'black',
        fontSize: 80,
        fontWeight: '500',
        marginTop: 20,
        fontFamily: 'Layiji',
    },

    text: {
        color : '#FFF',
        fontSize: 16,
        textAlign: 'center'
    }
})