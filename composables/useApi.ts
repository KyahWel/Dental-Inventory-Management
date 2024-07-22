import { Methods } from "~/types/methods"

const  baseUrl = useRuntimeConfig().public.BASE_URL
let headers : any = {}

const {token} = useAuth()
headers.Authorization = `Bearer ${token}`

export default class Api {
  call = async (path:string, method:Methods['method'],  query?:object) : Promise<object> => {
    const defaultOptions = {
      baseUrl: baseUrl,
      method: method,
      headers
    }
    return await $fetch(path, {defaultOptions, query})
  }
}
