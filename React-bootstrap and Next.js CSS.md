# How to use React-bootstrap with Next.js

[1. Install](###install)

<br>



## Using [Jumbotron](https://react-bootstrap.github.io/components/jumbotron/#jumbotron-api) Component

### 1. Install

`npm i react-bootstrap bootstrap` Install react-bootstrap



<br>



### 2. Import component

**1. Create `components/Jumbostron.js` file **

   ```javascript
   const Jumbo = () => {
     return (
     );
   }
   
   export default Jumbo;
   ```

   

**2. Choose Jumbotron component to use**

![image](https://user-images.githubusercontent.com/52592748/86528463-f5909100-bee2-11ea-81de-effbfca4d295.png)

**3. Check which components are used in the code provided**

  - Jumbotron and Container need to be imported from react-boostrap

    ```javascript
      import Jumbotron from 'react-bootstrap/Jumbotron'
      import Container from 'react-bootstrap/Container'
    ```

**4. Copy paste the code in Jumbotron.js's return. `Jumbotron.js` should look like below**

```javascript
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Jumbo = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
                </p>
            </Container>
        </Jumbotron>
    );
}

export default Jumbo;
```

**5. In `pages/index.js` import Jumbotron**

- Need to wrap adjacent jsx if there are many

  ```javascript
  import Jumbotron from '../component/Jumbotron';
  
  const Home = () => {
      return (
          <>
          <Jumbotron />
          </>
      );
  }
  
  export default Home;
  ```

**6. Do `npm run dev` and localhost:3000 will show the jumbotron without css applied**

![image](https://user-images.githubusercontent.com/52592748/86528457-da258600-bee2-11ea-8c22-b285d180d840.png)

<br>



### 3. Apply CSS in Next.js

**1. Stylesheet is required to use imported components because css is not included in them**

- React-bootstrap provides guidance on [how to import Stylesheets](https://react-bootstrap.github.io/getting-started/introduction/)

```css
{/* The following line can be included in your src/index.js or App.js file*/}

import 'bootstrap/dist/css/bootstrap.min.css';
```

- To apply react-bootstrap's component stylesheet, we need to know how Next.js works

  

**2. Add the style sheet in the form of a Next.js global stylesheet**

- `pages/_app.js`

```css
import 'bootstrap/dist/css/bootstrap.min.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

- Next.js supports [several types of stylesheets](https://nextjs.org/docs/basic-features/built-in-css-support)

  - A **global stylesheet** that applies to all pages and components can only be imported in `pages/_app.js` file

  ```css
  import '../styles.css'
  
  // This default export is required in a new `pages/_app.js` file.
  export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  ```

  - **Component-Level stylesheet** that only applies to a certain component should be named `[name].module.css` These stylesheets automatically create unique class names that allow users to use the same CSS class names in different stylesheets.

  - Regular <link> stylesheets and global CSS files are still supported

**3. The global stylesheet is applied to all pages and components, thus to `Jumbotron.js`**

![image](https://user-images.githubusercontent.com/52592748/86530119-16f87980-bef1-11ea-81df-629ff03119f9.png)

