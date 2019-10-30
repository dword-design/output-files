import { mapValues, values, promiseAll } from '@functions'
import P from 'path'
import { ensureDir, outputFile } from 'fs'

const outputFiles = async (...args) => {
  const path = typeof args[0] === 'string' ? args[0] : ''
  const files = (typeof args[0] === 'string' ? args[1] : args[0]) ?? {}
  await ensureDir(path)
  return files
    |> mapValues(
      (child, localPath) => {
        const absPath = P.join(path, localPath)
        return (typeof child === 'string' ? outputFile : outputFiles)(absPath, child)
      }
    )
    |> values
    |> promiseAll
}

export default outputFiles
