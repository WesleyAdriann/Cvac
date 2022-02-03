import axios from 'axios'

import { apiAddress } from '../apiAddress/'

import { IGetLocationsResponse } from './types'

const api = axios.create({
  baseURL: apiAddress.mapLocations.baseUrl
})

export const getLocations = (latitude: string, longitude: string, radius: string) => {
  const headers = {
    latitude,
    longitude,
    range: radius
  }
  return api.get<IGetLocationsResponse>(apiAddress.mapLocations.locations(), { headers })
}

export * from './types'
