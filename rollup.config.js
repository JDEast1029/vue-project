import buble from 'rollup-plugin-buble'

const config =  {
  entry: 'src/main.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    buble({ exclude: 'node_modules/**' })
  ]
};

export default config;
