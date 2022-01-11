import axios from 'axios'

const baseUrl = 'https://api.coincap.io/v2'

export class CryptoApi {
  static GET = async (limit: number = 5, offset: number = 0) => {
    const response = await axios.get(`${baseUrl}/assets`, {
      headers: { 'Content-Type': 'application/json' },
      params: {
        limit,
        offset,
      },
    })
    return response.data
  }
  static GETBYID = async (id: string) => {
    const response = await axios.get(`${baseUrl}/assets/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    })
    return response.data
  }
}
