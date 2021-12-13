import { useEffect } from 'react'
import auth from '@react-native-firebase/auth'

export const useSessionControl = () => {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((userState) => {
      console.log('>>>', userState)
    })
    return subscriber // unsubscribe on unmount
  }, [])
}
