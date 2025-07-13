import pathLib from 'node:path';

import fs from 'fs-extra';

export type Files = { [key: string]: string | Files };

const outputFiles = async (...args: [string, Files] | [Files]) => {
  const path = (typeof args[0] === 'string' ? args[0] : '') || '.';
  const files = (typeof args[0] === 'string' ? args[1] : args[0]) || {};
  await fs.ensureDir(path);
  return Promise.all(
    Object.entries(files).map(([localPath, child]) => {
      const absPath = pathLib.join(path, localPath);
      return (typeof child === 'string' ? fs.outputFile : outputFiles)(
        absPath,
        child,
      );
    }),
  );
};

export default outputFiles;
