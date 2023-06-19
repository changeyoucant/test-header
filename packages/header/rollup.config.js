// my-app/rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { babel } from '@rollup/plugin-babel'

export default {
  input: 'src/main.js',
  output: {
    file: 'lib/index.esm.js',
    format: 'esm',
    name: 'wdx_header',
    inlineDynamicImports: true,
  },
  plugins: [
    // json(),
    resolve({
      extensions: ['.js', '.json', '.ts'],
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
    }),
  ],
}
