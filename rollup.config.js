const typescript = require('rollup-plugin-typescript2');
const del = require('rollup-plugin-delete');
const pkg = require('./package.json');

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
    ],
    plugins:  [
      del({ targets: ['dist/*'] }),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
