#!/usr/bin/env node

const { spawn } = require("child_process");
const os = require("os");

const platform = os.platform();

let command;

if (platform === 'linux') {
  command = './swagger2ts-linux'
} else if (platform === 'win32') {
  command = './swagger2ts.exe'
} else {
  console.error(`Unsupported platform: ${platform}`);
  process.exit(1);
}

const child = spawn(command);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
