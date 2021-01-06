import json from "rollup-plugin-json";

const pkg = require("./package.json");

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, name: 'log', format: "umd", sourcemap: true },
    { file: pkg.module, format: "es", sourcemap: true }
  ],
  plugins: [
    json()
  ]
};