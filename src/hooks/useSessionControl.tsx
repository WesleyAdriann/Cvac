import { useEffect } from 'react'
import auth from '@react-native-firebase/auth'

import {
  useAppDispatch,
  useAppSelector,
  sessionActions,
  userProfileActions
} from '~/store'
import { logger } from '~/utils'
import { collectionUsers } from '~/services/firebase'

export const useSessionControl = () => {
  const TAG = 'useSessionControl'
  const dispatch = useAppDispatch()
  const session = useAppSelector((state) => state.sessionReducer)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async (userState) => {
      logger(TAG, 'effect user start')
      if (userState && userState.uid !== session.infos?.uid) {
        logger(TAG, 'effect user state change', userState.uid)
        const ref = collectionUsers.doc(userState.uid)

        dispatch(userProfileActions.startSession({
          email: userState.email,
          name: userState.displayName,
          uid: userState.uid,
          documentRef: ref
        }))
        dispatch(sessionActions.setSessionInfos({
          metadata: userState.metadata,
          providerData: userState.providerData,
          providerId: userState.providerId,
          uid: userState.uid
        }))
        logger(TAG, 'effect user success')
      } else if (!userState) {
        dispatch(userProfileActions.endSession())
        dispatch(sessionActions.endSession())
      }
    })
    return subscriber
  }, [])

  useEffect(() => {
    if (session.infos?.uid && !session.isAuth) {
      logger(TAG, 'session start')
      dispatch(sessionActions.startSession())
    }
  }, [dispatch, session.infos?.uid, session.isAuth])

  useEffect(() => {
    if (session.doLogout) {
      logger(TAG, 'logout start')
      auth().signOut()
    }
  }, [dispatch, session.doLogout])
}
