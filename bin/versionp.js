#!/usr/bin/env node

import { exec } from "child_process";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import fs, { readFileSync } from "fs";
import path from "path";

const argv = yargs(hideBin(process.argv)).argv;
const configFilePath = path.resolve('./versionpConfig.json');

let configFile;
if (fs.existsSync(configFilePath)) {
  const configFileStr = readFileSync(configFilePath);
  configFile = JSON.parse(configFileStr);
} else {
  configFile = { files: [] };
}

exec(`npm version ${argv._[0]} --no-git-tag-version`, (error, stdout, stderr) => {
  if (error) {
    return console.log(error);
  }

  if (stderr) {
    return console.log(stderr);
  }

  const version = stdout;
  const newVersionName = version.slice(1).trim();

  for (const item of configFile.files) {
    if (item.platform === 'android') {
      let file = readFileSync(item.path, 'utf-8');
      const versionCodeRegex = /versionCode\s+(\d+)/;
      const versionCodeMatch = file.match(versionCodeRegex);

      let versionCode = parseInt(versionCodeMatch[1], 10);
      versionCode += 1;

      file = file.replace(versionCodeRegex, `versionCode ${versionCode}`);
      file = file.replace(/versionName "\d+\.\d+\.\d+"/, `versionName "${newVersionName}"`);

      fs.writeFileSync(item.path, file, 'utf-8');
    }
    // Puedes agregar lógica similar para iOS si es necesario.
  }

  console.log(newVersionName);
  
});
