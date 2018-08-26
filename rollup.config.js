import typescript from 'rollup-plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';

/*
export default [{
  input: 'main-a.js',
  output: {
    file: 'dist/bundle-a.js',
    format: 'cjs'
  }
}, {
  input: 'main-b.js',
  output: [
    {
      file: 'dist/bundle-b1.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle-b2.js',
      format: 'esm'
    }
  ]
}];
*/

export default [{
  input: 'src/product1/index.ts',
  output: {
    file: 'dist-rollup/product1.js',
    format: 'iife'
  },
  plugins: [
    typescript({tsconfig: "tsconfig.json"}),
    uglify()
  ]
}, {
  input: 'src/product2/index.ts',
  output: {
    file: 'dist-rollup/product2.js',
    format: 'iife'
  },
  plugins: [
    typescript({tsconfig: "tsconfig.json"}),
    uglify()
  ]
}];
