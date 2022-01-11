import React, { useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps' // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, View } from 'react-native'
import RNLocation from 'react-native-location'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

export const Locations = () => {
  const [local, setLocal] = useState<any>()

  const getLocation = async () => {
    const status = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse'
      }
    })
    if(status) {
      const local = await RNLocation.getLatestLocation()
      console.log(local)
      setLocal(local)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
   <View style={styles.container}>
     {!!local &&

      <MapView
        //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: local.latitude,
          longitude: local.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        }}
      />
     }
   </View>
  )
}
