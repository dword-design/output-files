import pathLib from 'node:path';

import fs from 'fs-extra';

export type Files = { [key: string]: string | Files };

const outputFiles = async (...args: [string, Files] | [Files]) => {
  const path = (typeof args[0] === 'string' ? args[0] : '') || '.';
  const files = (typeof args[0] === 'string' ? args[1] : args[0]) || {};
  await fs.ensureDir(path);

  await Promise.all(
    Object.entries(files).map(
      ([localPath, child]: [string, string | Files]) => {
        const absPath = pathLib.join(path, localPath);
        return typeof child === 'string'
          ? fs.outputFile(absPath, child)
          : outputFiles(absPath, child);
      },
    ),
  );
};

export default outputFiles;
