import contributorNames from './contributors.json'

export interface Contributor {
  name: string
  avatar: string
  repository: string
}

const contributorsAvatars: Record<string, string> = {}

const getAvatarUrl = (name: string) =>
  import.meta.hot
    ? `https://github.com/${name}.png`
    : `/user-avatars/${name}.png`

export const contributors = (contributorNames as string[]).reduce(
  (acc, name) => {
    contributorsAvatars[name] = getAvatarUrl(name)
    acc.push({
      name,
      avatar: contributorsAvatars[name],
      repository: `https://github.com/${name}`,
    })
    return acc
  },
  [] as Contributor[]
)
