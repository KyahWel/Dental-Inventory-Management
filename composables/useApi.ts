const config = useRuntimeConfig()

export default class Api {
  request = async (method: any, body: any, path: string, params = '', query = {}) => {
    let url = `${config.public.apiBase}/${path}`;
    if (params) url += `/${params}`;

    return await $fetch(url, {
      method: method.toUpperCase(),
      body: method === 'GET' || method === 'DELETE' ? undefined : body,
      query
    });
  }

  post = (body:Object, path: string, query?:Object) => this.request('POST', body, path, '', query);
  put = (body:Object, path: string, query?:Object) => this.request('PUT', body, path, '', query);
  get = (path:string, query:Object) => this.request('GET', null, path, '', query);
  getById = (params: any, path: string, query: Object) => this.request('GET', null, path, params, query);
  delete = (params: any, path: string, query: Object) => this.request('DELETE', null, path, params, query);
}
