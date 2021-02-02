import json from "rollup-plugin-json"
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, name: 'log', format: "umd", sourcemap: true },
    { file: pkg.module, format: "es", sourcemap: true }
  ],
  plugins: [
    json(),
    typescript()
  ]
};