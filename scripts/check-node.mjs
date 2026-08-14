const minimum = [22, 13, 0];
const current = process.versions.node.split(".").map(Number);
const supported =
  current[0] > minimum[0] ||
  (current[0] === minimum[0] && current[1] > minimum[1]) ||
  (current[0] === minimum[0] &&
    current[1] === minimum[1] &&
    current[2] >= minimum[2]);

if (!supported) {
  console.error(`
Developer OS requires Node.js 22.13.0 or newer.
Current runtime: Node.js ${process.versions.node}

Install the current Node.js LTS release from:
https://nodejs.org/en/download

Then close and reopen PowerShell and run:
  node --version
  npm install
  npm run dev
`);
  process.exit(1);
}
