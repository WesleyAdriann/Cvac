import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PushNotificationScheduledLocalObject } from 'react-native-push-notification'

import { IPushNotification } from '~/types'

export interface INotificationsState {
  update: number
  dependentId?: string
  defaultNotifications: IPushNotification[]
  customNotifications: PushNotificationScheduledLocalObject[]
}

const initialState: INotificationsState = {
  update: 0,
  defaultNotifications: [],
  customNotifications: []
}

export const notificationsSlice = createSlice({
  name: 'Notifications',
  initialState,
  reducers: {
    setDependentId: (state, action: PayloadAction<string>) => {
      state.dependentId = action.payload
    },
    setNotifications: (state, action: PayloadAction<{default?: IPushNotification[], custom?: PushNotificationScheduledLocalObject[]}>) => {
      state.customNotifications = action.payload.custom ?? state.customNotifications
      state.defaultNotifications = action.payload.default ?? state.defaultNotifications
    },
    setUpdateNotifications: (state) => {
      state.update++
    }
  }
})

export const notificationsActions = notificationsSlice.actions
