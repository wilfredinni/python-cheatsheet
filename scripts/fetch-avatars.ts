import { join, resolve } from 'pathe'
import fs from 'fs-extra'
import { $fetch } from 'ohmyfetch'

const docsDir = resolve(__dirname, '../')
const pathContributors = resolve(docsDir, 'contributors/contributors.json')
const dirAvatars = resolve(docsDir, 'public/user-avatars/')

let contributors: string[] = []

async function download(url: string, fileName: string) {
  try {
    console.log('downloading', fileName)
    const image = await $fetch(url, { responseType: 'arrayBuffer' })
    await fs.writeFile(fileName, Buffer.from(image))
  } catch (e) {
    console.log('error downloading', fileName)
  }
}

export async function fetchAvatars() {
  await fs.ensureDir(dirAvatars)
  contributors = JSON.parse(
    await fs.readFile(pathContributors, { encoding: 'utf-8' })
  )

  await Promise.all(
    contributors.map((name) =>
      download(
        `https://github.com/${name}.png?size=48`,
        join(dirAvatars, `${name}.png`)
      )
    )
  )
}
