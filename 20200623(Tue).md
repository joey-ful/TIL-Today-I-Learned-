# TIL-Today-I-Learned-  20200623(Tue)



### [Next](https://www.youtube.com/watch?v=glL_Bh6XvAc&list=PLcqDmjxt30RujZzqIS1sAHz92TZDaRB9d&index=3)

- Use SSR for the first loading of a page or a page refresh(F5)

- Use single-page application for the rest of the loadings

- Very useful when:
  -  need exposure to the search engines
  -  users need fast interactions with the web page
- Development mode is a little slow so shift to production mode before service



### Versions of nodebird

- Node.js
  - Node.js version 12 LTS for service
  - Node.js version 14 for study purposes

- Next version 9

- Antd version 4



## [Installing and running Next.js](https://www.youtube.com/watch?v=fHmKEib7YD8&list=PLcqDmjxt30RujZzqIS1sAHz92TZDaRB9d&index=4)

`npm i next`

`npm i next@9` version 9

`npm react react-dom`

`npm run dev` gives localhost:3000 site



- No need to import react when using next

```react
import React from 'react';
```



#### pages

- Pages need to be in the directory called "pages"

- Sometimes Next does not notice newly created pages
  - `npm run dev`
- Next handles routing and server side rendering
  - If profile.js page is added, its components will be shown in localhost:3000/profile



#### AppLayout

- Create a component that will be used in index, profile and signup

- `npm i prop-types` to use

  ```react
  AppLayout.propTypes = {
  
  };
  ```

- Childred is of type node

  ```react
  AppLayout.propTypes = {
  	children: PropTypes.node.isRequired,
  };
  ```

  - Node here is react node meaning everything that can be drawn on the web page



- Applying Applayout to index page

  - AppLayout.js

    ```react
    import React from 'react';
    import PropTypes from 'prop-types';
    
    const AppLayout = ({ children }) => {
        return (
            <div>
                <div>Overlapping area</div>
                {children}
            </div>
        );
    }
    
    AppLayout.propTypes = {
        children: PropTypes.node.isRequired,
    }
    
    export default AppLayout;
    ```

    

  - index.js

    ```react
    import React from 'react';
    import AppLayout from '../component/AppLayout';
    
    const Home = () => {
        return (
            <AppLayout>
                <div>Hello, Next!</div>
            </AppLayout>
        );
    }
    
    export default Home;
    ```

  - "Overlapping area" is displayed first followed by the child component, "Hello, Next!"

    ![image](https://user-images.githubusercontent.com/52592748/85364391-0396f700-b55e-11ea-8552-2cf6bc7f03de.png) 



### Link

- Next's router

- href in Link

```react
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Link href="/"><a>nodebird</a></Link>
                <Link href="/profile"><a>my profile</a></Link>
                <Link href="/signup"><a>signup here</a></Link>
            </div>
            {children}
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
```



### eslint

`npm i eslint -D`

`npm i eslint-plugin-import -D` 

`npm i eslint-plugin-react -D`

`npm i eslint-plugin-react-hooks -D`



- ".eslintrc"

```react
{
  "parserOptions": {
    "ecmaVersion": 2020, // version
    "sourceTye": "module", // import/export instead of script type
    "ecmaFeatures": { //special feature
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [ // follow basic rules, what others made
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "import",
    "react-hooks"
  ],
  "rules": {

  }
}
```



# Zerocho's [Q&A](https://www.youtube.com/watch?v=44PToNf63zI&list=PLcqDmjxt30RujZzqIS1sAHz92TZDaRB9d&index=7)

- Server-side rendering requires React and a web development tool like Node.js, Django and Spring

- Material design, Antd, Bootstrap

- CORS setting is required because front server's and backend server's domains are different

  





























