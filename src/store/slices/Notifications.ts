import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PushNotificationScheduledLocalObject } from 'react-native-push-notification'

export interface INotificationsState {
  dependentId?: string
  defaultNotifications: PushNotificationScheduledLocalObject[]
  customNotifications: PushNotificationScheduledLocalObject[]
}

const initialState: INotificationsState = {
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
    setNotifications: (state, action: PayloadAction<{default: PushNotificationScheduledLocalObject[], custom: PushNotificationScheduledLocalObject[]}>) => {
      state.customNotifications = action.payload.custom
      state.defaultNotifications = action.payload.default
    },
    pushCustomNotification: (state, action: PayloadAction<PushNotificationScheduledLocalObject>) => {
      state.customNotifications.push(action.payload)
    }
  }
})

export const notificationsActions = notificationsSlice.actions
