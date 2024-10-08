import { ApiError } from './api-error'
import QS from 'qs'

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

/** TODO
 * API 명세에 따름
 */
export interface ApiResponse {}

interface Config {
  baseUrl: string
  revalidate: number
}

interface FetchParams {
  url: string
  method: HttpMethod
  headers?: HeadersInit
  query?: object
  body?: object
  next?: {
    revalidate: number
  }
}

class ApiClient {
  constructor(private readonly config: Config) {}

  async fetch<T extends ApiResponse>(params: FetchParams): Promise<T> {
    const response = await fetch(this.getUrl(params), {
      headers: this.getHeaders(params.headers),
      next: this.getNextOptions(params.next),
      body: this.getBody(params.body),
      method: params.method,
    })

    return this.handleResponse<T>(params, response)
  }

  private getUrl({ url, query }: Pick<FetchParams, 'url' | 'query'>): string {
    const searchParamsUrl = query ? `?${QS.stringify(query)}` : ''
    return `${this.config.baseUrl}${url}${searchParamsUrl}`
  }

  private getHeaders(headers?: FetchParams['headers']): HeadersInit {
    return {
      ...(headers || {}),
      'Content-Type': 'application/json',
    }
  }

  private getNextOptions(next: FetchParams['next']): NextFetchRequestConfig | undefined {
    return {
      revalidate: next?.revalidate ?? this.config.revalidate,
      ...next,
    }
  }

  private getBody(body?: FetchParams['body']): string | undefined {
    if (!body) {
      return undefined
    }
    return JSON.stringify(body)
  }

  private async handleResponse<T extends ApiResponse>(params: FetchParams, res: Response) {
    if (!res.ok) {
      console.error(await res.json())
      const url = this.getUrl(params)
      throw new ApiError(`${res.statusText}: [${params.method}] ${url}`, {
        status: res.status,
        url,
      })
    }

    if (res.status === 204) {
      return Promise.resolve() as unknown as T
    }
    const data = (await res.json()) as { message: string; body: T }
    return data.body
  }
}

export const apiClient = new ApiClient({
  baseUrl: 'https://server.haap.r-e.kr',
  revalidate: 0,
})
