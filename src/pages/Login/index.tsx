import React from 'react'
import { View, Text, Button } from 'react-native'
import auth from '@react-native-firebase/auth'

export function Login () {
  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword('admin@gmail.com', '123456')
      .then(() => {
        console.log('User account created & signed in!')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!')
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!')
        }

        console.error(error)
      })
  }

  const onLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
  }


  return (
    <View>
      <Button title='logout' onPress={onLogout}/>

      <View>
          <Button title='Login' onPress={onLogin}/>
        <Text>Login</Text>
      </View>
    </View>
  )
}
