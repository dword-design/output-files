const mapValues = require('lodash/mapValues')
const values = require('lodash/values')
const { join } = require('path')
const { ensureDir, outputFile, exists } = require('fs-extra')

const outputFiles = async (path, files) => {
  await ensureDir(path)
  return Promise.all(
    values(
      mapValues(
        files,
        (child, localPath) => {
          const absPath = join(path, localPath)
          return (typeof child === 'string' ? outputFile : outputFiles)(absPath, child)
        }
      ),
    ),
  )
}

module.exports = outputFiles
