const mapValues = require('lodash/mapValues')
const values = require('lodash/values')
const { join } = require('path')
const { mkdir, writeFile, exists } = require('fs-extra')

const outputFiles = async (path, files) => {
  if (!await exists(path)) {
    await mkdir(path)
  }
  return Promise.all(
    values(
      mapValues(
        files,
        (child, localPath) => {
          const absPath = join(path, localPath)
          return (typeof child === 'string' ? writeFile : outputFiles)(absPath, child)
        }
      ),
    ),
  )
}

module.exports = outputFiles
