import { defineConfig } from 'rollup'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  input: 'src/algebra.js',
  output: [
    {
      file: 'dist/algebra.umd.js',
      format: 'umd',
      name: 'algebra'
    },
    {
      file: 'dist/algebra.js',
      format: 'es'
    }
  ],
  plugins: [
    json(),
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }),
    terser({ mangle: false }),
    copy({ targets: [{ src: 'src/algebra.d.ts', dest: 'dist' }] })
  ]
})
