
## [Changing class to Hooks](https://www.youtube.com/watch?v=Zb70S1I6u6U&list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn&index=20)

- Declare **component** as a function not a class

  ```react
  class WordRelay extends Component {
  
  };
  
  ---
  
  const WordRelay = () => {
      
  };
  ```



- **States** are set separately

  ```react
  state = {
  	word: 'hi',
  	value: 'hello',
  }
  
  ---
  const { useState } = React;
  
  const [word, setWord] = useState('hi');
  const [value, setValue] = useState('hello');
  ```

  

- `this.state` is not used

  ```react
  this.setState({
  	word: this.state.value,
      value: '',
  });
  
  <form onSubmit={this.onSubmitForm}></form>
  
  ---
      
  setWord(value);
  setValue('');
  
  <form onSubmit={onSubmitForm}></form>
  ```

  

- Class methods(**functions**) should be declared

  ```react
  onSubmitForm = (e) => {
      
  }
  
  ---
      
  const onSubmitForm = (e) => {
      
  }
  ```

  

- **Refs** are modified

  ```react
  this.input.focus(); // in onSubmitForm method
  
  input;
  onRefInput = (c) => {
      this.input = c;
  }
  
  <input ref={this.onRefInput} ... /> // in render's return
  
  ---
  const { useRef } = React; //top
  const inputRef = useRef(null); // in WordRelay
  inputRef.current.focus(); // in onSubmitForm method
  
  <input ref={inputRef} ... /> // in return
  ```

  

- **Render** is not used in Hooks

  ```react
  render () {
  	return ();
  }
  
  ---
  
  return ();
  ```



### label and class

- React does not accept  `for` and `class` 
- Use `htmlFor` and `className` 

```react
<label id="label" htmlFor="wordInput">글자를 입력하세요.</label>
<input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
                
```





## [import and require](https://www.youtube.com/watch?v=5xvsex_I8vc&list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn&index=21)

### Require (used in Node)

- Node's module system

- If a class is exported as module, then it can be required in other files

  ```react
  class NumberBaseball {
  
  }
  module.exports = NumberBaseball;
  ```

  ```react
  const NumberBaseball = require('./NumberBaseball');
  ```



- Scripts made by other people can also be required.

  ```react
  const React = require('react');
  ```

  ```react
  const { hot } = require('react-hot-loader/root');
  ```

  

### Import (used in React)

- Require can be modified to import

  ```react
  import React from 'react';
  import { hot } from 'react-hot-loader/root';
  import NumberBaseball from './NumberBaseball';
  ```

  Importing in {} is a variable or a value

  

- Can import several modules if brought from the same source

  ```
  const React = require('react');
  const { Component } = 'React';
  
  ---
  
  import React, { Component } from 'react';
  ```

  

- **Export default**

  - This is not exactly same as `module.exports`, but transition into `export default` is acceptable in React

  ```react
  module.exports = NumberBaseball;
  
  ---
  
  export default NumberBaseball; //import NumberBaseball;
  ```

  

- Variables or values can also be imported. There's no limit in importing these unlike import default

  ```react
  export const hello = 'hello'; // import {hello}
  export const bye = 'bye'; // import { hello, bye }
  ```

  - Exports grammar shown above is ES2015 grammar

  - In Node's module system exports are written as follow:

    ```javascript
    const React = require('react');
    exports.hello = 'hello';
    module.exports = Numberbaseball;
    ```

