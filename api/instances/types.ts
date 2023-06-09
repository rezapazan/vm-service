import { InstanceType } from '@/types'
import axios from '@/utils/axios'

export const getTypes = async () => {
  const locations = await axios.get(
    'https://my-json-server.typicode.com/rezapazan/vm-service/types'
  )

  return locations.data as InstanceType[]
}
