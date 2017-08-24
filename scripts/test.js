const fs = require('fs');
const path = require('path');

const TARGET_PATH = path.join(process.cwd(), 'node_modules', 'react');

if (fs.existsSync(TARGET_PATH)) {
  process.exit(0);
}

process.exit(1);
