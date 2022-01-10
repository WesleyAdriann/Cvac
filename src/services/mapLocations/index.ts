import axios from 'axios'

import { apiAddress } from '../apiAddress/'
import { TLocationCategory } from './types'

const api = axios.create({
  baseURL: apiAddress.mapLocations.baseUrl
})

export const getLocations = (latitude: string, longitude: string, radius: number, category: TLocationCategory) => {
  return api.get(apiAddress.mapLocations.locations(latitude, longitude, radius, category))
}

export * from './types'
