/*
NextJS is famous for using its own `fetch` API under the hood, to control cache,
revalidation, and other things that won't work with axios.

However, for the sake of simplicity, we will use axios on this small poc.

We could also use `fetch` API here, but it would require more code out-of-the-box.
And my idea is to keep things as simple as possible for this howe work boilerplate.

If you want to use `fetch` API, feel free to use this gist I've written as a starting point:
https://gist.github.com/ppalmeida/9073ad42d0512d7590a313bc30350352
*/
import axios, { AxiosRequestConfig } from 'axios'

const getBaseUrl = () => {
  if (typeof window === 'undefined') {
    return process.env.SERVER_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || '/'
  }

  return process.env.NEXT_PUBLIC_API_BASE_URL
}

const baseConfig = {
  baseURL: getBaseUrl(),
}

export const getHttpClient = (config?: AxiosRequestConfig) =>
  axios.create({
    ...baseConfig,
    ...(config || {}),
  })

const httpClient = getHttpClient({})
export default httpClient
