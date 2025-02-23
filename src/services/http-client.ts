type RequestConfig = {
  headers?: HeadersInit
  body?: unknown
} & Omit<RequestInit, 'body' | 'headers'>

export class HttpError extends Error {
  constructor(
    public response: Response,
    public data: unknown,
    message?: string,
  ) {
    super(message || `HTTP Error ${response.status}: ${response.statusText}`)
    this.name = 'HttpError'
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''

const parseResponse = async (response: Response) => {
  const contentType = response.headers.get('content-type')
  if (contentType?.includes('application/json')) {
    return response.json()
  }
  if (contentType?.includes('text/')) {
    return response.text()
  }
  return response.blob()
}

const handleResponse = async (response: Response) => {
  const data = await parseResponse(response)

  if (!response.ok) {
    throw new HttpError(response, data)
  }

  return data
}

const createUrl = (endpoint: string): string => (endpoint.startsWith('http') ? endpoint : `${BASE_URL}${endpoint}`)

const request = async <T>(endpoint: string, config: RequestConfig = {}): Promise<T> => {
  const { headers = {}, body, ...restConfig } = config

  const requestConfig: RequestInit = {
    ...restConfig,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }

  if (body) {
    requestConfig.body = JSON.stringify(body)
  }

  const response = await fetch(createUrl(endpoint), requestConfig)
  return handleResponse(response) as Promise<T>
}

export const get = <T>(endpoint: string, config: Omit<RequestConfig, 'body'> = {}) =>
  request<T>(endpoint, { ...config, method: 'GET' })

export const post = <T>(endpoint: string, data?: unknown, config: Omit<RequestConfig, 'body'> = {}) =>
  request<T>(endpoint, { ...config, method: 'POST', body: data })

export const put = <T>(endpoint: string, data?: unknown, config: Omit<RequestConfig, 'body'> = {}) =>
  request<T>(endpoint, { ...config, method: 'PUT', body: data })

export const patch = <T>(endpoint: string, data?: unknown, config: Omit<RequestConfig, 'body'> = {}) =>
  request<T>(endpoint, { ...config, method: 'PATCH', body: data })

export const del = <T>(endpoint: string, config: Omit<RequestConfig, 'body'> = {}) =>
  request<T>(endpoint, { ...config, method: 'DELETE' })

export const http = {
  get,
  post,
  put,
  patch,
  delete: del,
}

export default http
