import { InstanceLocation } from '@/types'
import axios from '@/utils'

export const getLocations = async () => {
  const locations = await axios.get(
    'https://my-json-server.typicode.com/rezapazan/vm-service/locations'
  )

  return locations.data as InstanceLocation[]
}
