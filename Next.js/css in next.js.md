# How to apply [CSS in Next.js](https://nextjs.org/docs/basic-features/built-in-css-support)

**1. Global stylesheet**

- Applies to all pages and components
- Can only be imported in `pages/_app.js` file

```css
import '../styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```



**2. Component-Level stylesheet**

- Only applies to a certain component

- Should be named `[name].module.css` 

- Automatically create unique class names that prevent same CSS class names in different stylesheets from collision

- **Example: a button component**

  1. `Button.js`

  - `import [style name] from ./[component name.module.css]`
  - className=`{style name.className}`

  ```css
  import styles from './Button.module.css'
  
  const Button = () => {
    return (
      <button type="button"
    		className={styles.error}
    	>
        Click me!
      </button>
    )
  }
  ```

  2. `Button.module.css` 

  ```css
  .error {
    color: white;
    background-color: red;
  }
  ```

  3. Outcome

  ![image](https://user-images.githubusercontent.com/52592748/86583039-918ecb00-bfbd-11ea-8e39-df2719dfef56.png) 

  

**3. Regular <link> stylesheets and global CSS files are still supported**

