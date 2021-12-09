import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import auth from '@react-native-firebase/auth'

export function Login () {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState<any>()

  // Handle user state changes
  function onAuthStateChanged (user: any) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

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

  if (initializing) return null

  if (!user) {
    return (
      <View>
          <Button title='Login' onPress={onLogin}/>
        <Text>Login</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Welcome {user?.email}</Text>
      <Button title='logout' onPress={onLogout}/>
    </View>
  )
}
