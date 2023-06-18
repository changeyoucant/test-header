// my-app/rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/main.js',
  output: {
    file: 'lib/index.esm.js',
    format: 'esm',
    name: 'wdx_header',
    inlineDynamicImports: true,
  },
  plugins: [resolve(), commonjs()],
}