// hospital, posto de saúde, urgência, samu, farmácia, clínica, consultório, laboratório, apoio à saúde, atenção específica, unidade administrativa, atendimento domiciliar
export type TLocationCategory = 'HOSPITAL' | 'POSTO DE SAÚDE'

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
