import { promises as fs } from 'fs'
import { $fetch } from 'ohmyfetch'

interface Contributor {
  login: string
  avatar_url: string
  html_url: string
}

async function fetchContributors(page = 1) {
  const collaborators: Contributor[] = []
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
  data.forEach((i) => {
    collaborators.push({
      login: i.login,
      avatar_url: i.avatar_url,
      html_url: i.html_url,
    })
  })

  if (data.length === 100)
    collaborators.push(...(await fetchContributors(page + 1)))
  return collaborators
}

async function generate() {
  const collaborators = await fetchContributors()
  await fs.writeFile(
    './cheatsheet/contributors.json',
    JSON.stringify(collaborators, null, 2),
    'utf8'
  )
}

generate()
