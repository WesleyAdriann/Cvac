import { useEffect } from 'react'
import auth from '@react-native-firebase/auth'

import { startSession, endSession } from '../store/slices/Session'
import { store } from '../store'

export const useSessionControl = () => {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((userState) => {
      if (userState) {
        return store.dispatch(startSession(userState))
      }
      store.dispatch(endSession())
    })
    return subscriber
  }, [])
}
