import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs()
  ],
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    }
  ]
};
