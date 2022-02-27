import React, { useRef } from 'react'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import analytics from '@react-native-firebase/analytics'

import { AppHeader } from '../atomic'

import { Login } from './Login'
import { Home } from './Home'
import { Register } from './Register'
import { Locations } from './Locations'
import { Calendars } from './Calendars'
import { DependentsNotification } from './DependentsNotifications'
import { DependentsVaccineCertificate } from './DependentsVaccineCertificate'
import { VaccineDetails, IVaccineDetails } from './VaccineDetails'
import { RegisterDependents } from './RegisterDepentents'
import { VaccineCertificateCalendars } from './VaccineCertificateCalendars'
import { VaccineCertificates } from './VaccineCertificates'
import { Notifications } from './Notifications'
import { RegisterNotifications } from './RegisterNotifications'

export type RootStackParamList = {
  home: {},
  login: {},
  register: {},
  locations: {},
  calendars: {},
  vaccineDetails: IVaccineDetails,
  dependentsVaccineCertificate: {},
  vaccineCertificateCalendars: {},
  vaccineCertificate: {},
  registerDependents: {},
  dependentsNotification: {},
  notifications: {},
  registerNotifications: {}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigator: React.FC = () => {
  const routeNameRef = useRef<string>()
  const navigationRef = useNavigationContainerRef()

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current
        const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: `/cvac/${currentRouteName}`,
            screen_class: currentRouteName
          })
        }
        routeNameRef.current = currentRouteName
      }}
    >
      <Stack.Navigator initialRouteName='home' screenOptions={{ header: (props) => <AppHeader {...props}/> }}>
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='locations' component={Locations} options={{ title: 'Locais' }} />
        <Stack.Screen name='calendars' component={Calendars} options={{ title: 'Calendarios' }} />
        <Stack.Screen name='vaccineDetails' component={VaccineDetails} options={{ title: 'Detalhes' }}/>
        <Stack.Screen name='dependentsVaccineCertificate' component={DependentsVaccineCertificate} options={{ title: 'Carteiras' }}/>
        <Stack.Screen name='vaccineCertificateCalendars' component={VaccineCertificateCalendars} options={{ title: 'Carteiras' }}/>
        <Stack.Screen name='vaccineCertificate' component={VaccineCertificates} options={{ title: 'Carteira de Vacina' }}/>
        <Stack.Screen name='registerDependents' component={RegisterDependents} options={{ title: 'Cadastro de Dependente' }}/>
        <Stack.Screen name='dependentsNotification' component={DependentsNotification} options={{ title: 'Lembretes' }} />
        <Stack.Screen name='notifications' component={Notifications} options={{ title: 'Lembretes' }}/>
        <Stack.Screen name='registerNotifications' component={RegisterNotifications} options={{ title: 'Criar lembrete' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
