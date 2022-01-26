import { TLocationCategory } from '../mapLocations'

export const apiAddress = {
  mapLocations: {
    baseUrl: 'http://mobile-aceite.tcu.gov.br',
    locations: (latitude: string, longitude: string, radius: number, category: TLocationCategory) => `/mapa-da-saude/rest/estabelecimentos/latitude/${latitude}/longitude/${longitude}/raio/${radius}`
  }
}
