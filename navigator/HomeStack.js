import React, { useState, useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from '../screens/HomeScreen'
import { Header } from '../components/Header'
import * as Font from 'expo-font'
import { SplashScreen } from '../screens/SplashScreen'

const HomeStack = createStackNavigator()

export const HomeStackScreen = () => {
  const [LoadFontState, setLoadFontState] = useState(false)

  useEffect( () => {
    _loadFont()
  }, [])

  const _loadFont = async () =>{
    await Font.loadAsync({
      Layiji: require('../assets/fonts/Layiji.ttf'),
      Priyati: require('../assets/fonts/Priyati-Regular.ttf'),
    })
    setLoadFontState(true)
  }

  return (
    <HomeStack.Navigator>
      {LoadFontState ? (
      <HomeStack.Screen
              name='Home'
              component={HomeScreen}
              options={Header('รายการปลาที่เลี้ยง')}
      />
      ):(
        <HomeStack.Screen
          name='Loading'
          component={SplashScreen}
        />
      )}
    </HomeStack.Navigator>
  )
}