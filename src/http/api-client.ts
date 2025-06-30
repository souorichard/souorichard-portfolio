import ky from 'ky'

export const api = ky.create({
  prefixUrl: process.env.GITHUB_API_URL,
})
