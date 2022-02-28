export interface IGetLocationsResponse {
  locations: {
    nome: string
    latitude: number
    longitude: number
    logradouro: string
    bairro: string
    distancia: string
  }[]
}
