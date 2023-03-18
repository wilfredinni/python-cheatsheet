import { promises as fs } from 'fs'
import { $fetch } from 'ohmyfetch'
import { fetchAvatars } from './fetch-avatars'

interface Contributor {
  login: string
}

async function fetchContributors(page = 1) {
  const collaborators: string[] = []
  const data =
    (await $fetch<Contributor[]>(
      `https://api.github.com/repos/wilfredinni/python-cheatsheet/contributors?per_page=100&page=1`,
      {
        method: 'get',
        headers: {
          'content-type': 'application/json',
        },
      }
    )) || []
  collaborators.push(...data.map((i) => i.login))
  const index = collaborators.indexOf('renovate[bot]')
  if (index > -1) collaborators.splice(index, 1)

  if (data.length === 100) {
    collaborators.push(...(await fetchContributors(page + 1)))
  }

  return collaborators
}

async function generate() {
  const collaborators = await fetchContributors()
  await fs.writeFile(
    './contributors/contributors.json',
    JSON.stringify(collaborators, null, 2),
    'utf8'
  )
}

const init = async () => {
  await generate()
  await fetchAvatars()
}

init()
