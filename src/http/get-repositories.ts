import { api } from './api-client'

interface GetRepositoriesResponse {
  id: number
  name: string
  description: string
  html_url: string
}

export async function getRepositories(): Promise<GetRepositoriesResponse[]> {
  const response = await api
    .get('users/souorichard/repos?per_page=1000')
    .json<GetRepositoriesResponse[]>()

  return response
}
