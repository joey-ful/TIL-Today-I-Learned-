# How to use React-bootstrap with Next.js

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

**7. Add the stylesheet in the form of a Next.js global stylesheet**

- `pages/_app.js`

```css
import 'bootstrap/dist/css/bootstrap.min.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

**8. The global stylesheet is applied to all pages and components, thus to `Jumbotron.js`**

![image](https://user-images.githubusercontent.com/52592748/86530119-16f87980-bef1-11ea-81df-629ff03119f9.png)
