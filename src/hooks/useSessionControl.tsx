import { useEffect } from 'react'
import auth from '@react-native-firebase/auth'

import { sessionActions } from '../store/slices/Session'
import { userProfileActions } from '../store/slices/UserProfile'
import { useAppDispatch, useAppSelector } from '../store'

export const useSessionControl = () => {
  const dispatch = useAppDispatch()
  const session = useAppSelector((state) => state.sessionReducer)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((userState) => {
      if (userState && userState.uid !== session.infos?.uid) {
        dispatch(sessionActions.startSession({
          metadata: userState.metadata,
          providerData: userState.providerData,
          providerId: userState.providerId,
          uid: userState.uid
        }))
        dispatch(userProfileActions.startSession({
          email: userState.email,
          name: userState.displayName,
          uid: userState.uid
        }))
      } else if (!userState) {
        dispatch(userProfileActions.endSession())
        dispatch(sessionActions.endSession())
      }
    })
    return subscriber
  }, [])

  useEffect(() => {
    if (session.doLogout) auth().signOut()
  }, [session.doLogout])
}
