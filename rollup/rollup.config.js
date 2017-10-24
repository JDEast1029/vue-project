import babel from 'rollup-plugin-babel'; //将ES6的语法装换成ES5
import eslint from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
//import json
import json from 'rollup-plugin-json';
//css
import postcss from 'rollup-plugin-postcss';//在html的head中插入一个style标签
import simpleVars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

const config = {
	entry: 'src/main.js',
	dest: 'build/js/main.min.js',
	format: 'iife',
	sourceMap: 'inline',
	plugins: [
		postcss({
			plugins: [
				simpleVars(),
				nested(),
				cssnext({warnForDuplicates: false}),
				cssnano(),
			],
			extension: ['.scss']
		}),
		json(),
		babel({
			exclude: 'node_modules/**'
		}),
		eslint({
			exclude: [
				'src/styles/**'
			]
		}),
		replace({
			exclude: 'node_modules/**',
			ENV: JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		(process.env.NODE_ENV === 'production' && uglify())
	]
};

export default config;
