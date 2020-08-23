# TIL-Today-I-Learned-

# TIL-Today-I-Learned- 20200617(Wed)



## [babel/preset-env and plugins](https://www.youtube.com/watch?v=LoMFC4kdrnQ&list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn&index=17)

- `options` show options of babel/loader, but there are also options of babel/preset/env

  `preset` is a collection of presets

  `> 5% in KR` specifies browser versions with usage rate over 5% in Korea

```react
const webpack = require('webpack');
 
options: {
                presets: [
                    ['@babel/preset-env', {
                    targets: {
                        browsers: ['> 5% in KR', 'last 2 chrome versions'],
                    },
                    debug: true,
                }],
                '@babel/preset-react',
            ],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },

plugins: [ // extra extensions
	new webpack.LoaderOptionsPlugin({ debug: true}), // applies "debug: true" to all the options of the loader
],
```



- [Browerlist](https://github.com/browserslist/browserslist) provides a list of browser specifications



## [webpack-dev-server and hot-loader](https://www.youtube.com/watch?v=s7c_Xknqj-I&list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn&index=19)

### How to build automatically without typing `npx webpack` everytime

- `npm i -D react-hot-loader` detects modifications

- `npm  i -D webpack-dev-server` automatically builds files when modifications occur. 

  - `npm run dev` provides a server address http://localhost:8080
  - `npx webpack` works fine but does not provide the server address
  - should be rebuilt when `webpack.config.js` is modified

 

- Modify scripts in "package.json"

  ```react
  "scripts": {
      "dev": "webpack-dev-server --hot"
  }
  ```

  `npm run dev`

  

- Modify "client"

  ````react
  const WordRelay = require('./WordRelay');
  
  reactDom.render(<WordRelay />, document.querySelector('#root'));
  
  ​```after```
  
  const { hot } = require('react-hot-loader/root');
  
  const WordRelay = require('./WordRelay');
  
  const Hot = hot(WordRelay);
  
  ReactDom.render(<Hot />, document.querySelector('#root'));
  ````

  

- Add under "plugins" in "webpack.config.js"

  ```react
   plugins: [
            	'react-hot-loader/babel',
            ],
  ```



- No need to specify directory in the path because "webpack-dev-server" handles the output file.

  ```html
  <script src="./app.js"></script>
  ```

- It is possible to change script source path by modifying "webpack.config.js" output

  ```react
  output: {
  	publicPath: '/dist/',
  }
  // app.use('/dist', express.static(__dirname, 'dist'));
  ```

  and bring the path back

  <script src="./dist/app.js"></script>

### `Ctrl + Shit + I` Console

`HMR` Hot Module Reload - shows which files have been modified

`WDS` Webpack Dev Server - shows updating status




### webpack

- Node only supports Node's module system, but **Babel** automatically shifts ES2015 grammar into Node's
- "webpack.config.js" is run by Node so must use `require`


