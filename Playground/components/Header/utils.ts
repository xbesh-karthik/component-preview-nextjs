import { saveAs } from 'file-saver'

import DownloadSvg from './icons/download.svg'
import GithubSvg from './icons/github.svg'
import MoonSvg from './icons/moon.svg'
import ReactSvg from './icons/react.svg'
import ShareSvg from './icons/share.svg'
import SuccessSvg from './icons/success.svg'
import SunSvg from './icons/sun.svg'

import { IMPORT_MAP_FILE_NAME } from '@/Playground/files'
import eslintrc from '@/Playground/template/.eslintrc.cjs'
import gitignore from '@/Playground/template/.gitignore'
import index from '@/Playground/template/index.html'
import pkg from '@/Playground/template/package.json'
import readme from '@/Playground/template/README.md'
import tsconfig from '@/Playground/template/tsconfig.json'
import tsconfigNode from '@/Playground/template/tsconfig.node.json'
import config from '@/Playground/template/vite.config.js'
import type { IFiles } from '@/Playground/types'

export const icons = {
  DownloadSvg,
  GithubSvg,
  MoonSvg,
  ReactSvg,
  ShareSvg,
  SunSvg,
  SuccessSvg,
}

export async function downloadFiles(files: IFiles) {
  // @ts-ignore
  const { default: JSZip } = await import('https://esm.sh/jszip@3.10.1')
  const zip = new JSZip()

  // basic structure
  zip.file('index.html', index)
  zip.file('package.json', pkg)
  zip.file('vite.config.js', config)
  zip.file('tsconfig.json', tsconfig)
  zip.file('tsconfig.node.json', tsconfigNode)
  zip.file('README.md', readme)
  zip.file('eslintrc.md', eslintrc)
  zip.file('gitignore.md', gitignore)

  // project src
  const src = zip.folder('src')!

  Object.keys(files).forEach((name) => {
    if (files[name].name !== IMPORT_MAP_FILE_NAME) {
      src.file(name, files[name].value)
    } else {
      zip.file(name, files[name].value)
    }
  })

  const blob = await zip.generateAsync({ type: 'blob' })
  saveAs(blob, 'react-project.zip')
}
