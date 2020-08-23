# TIL-Today-I-Learned- 20200624(Wed).md



## How to use material-ui components

### Install create-react-app

`npx create-react-app` this will create public and src directories containing files. Now we can use `npm start` to load our web page and it will be automatically reloaded whenever it's been modified

`npx create-react-app .` add a dot to create in the current directory

`npm start` will load a web page with react logo on it


### Clean the project

- public directory
  - Erase favicon.ico and two logo files (logo192.png, logo512.png) in the public directory

- src directory
  - Erase logo.svg and index.css file in src directory
  - Erase "import './index.css';" line in index.js file
     - Change unregister to register if want the web/app to work faster
        ```
        serviceWorker.unregister();
        
        ---
        
        serviceWorker.register();
        ```

- "App.js" file will be modified at the end to get the results

- But to verify if the web page works right away, erase the import logo line and empty the return values to get the result like below:
  ```
  import React from 'react';
  import './App.css';
  
  function App() {
    return (
      <>
        <h2>Hello, World!</h2>
      </>
    );
  }
  
  export default App;
  ```
- `npm start` will display "Hello, World!"



### Applying material-ui components

- Create a "components" directory in "src" directory

#### Let's apply "App Bar with menu" in [AppBar](https://material-ui.com/components/app-bar/)

![image](https://user-images.githubusercontent.com/52592748/85570624-77c0c000-b66e-11ea-9372-bed993e93065.png)

- Click "Show the source" to get the code (shown below)
- Copy paste in a js file "AppBar.js" in the "components" directory 

```react
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
```

- Check imports to see which libraries are needed
  - The code contains components from "@material-ui/core" and "@material-ui/icons" libraries
  - `npm i @material-ui/core`
  - `npm i @material-ui/icons`

- All the App Bar components are grouped in "MenuAppBar" component

```react
export default function MunuAppBar() {

}
```

- Import "MenuAppBar" component In "App.js"

```react
import React from 'react';
import './App.css';
import AppBar from './components/AppBar';

function App() {
  return (
      <>
        <div>
          <AppBar />
        </div>
      </>
  );
}

export default App;

```

- Do `npm start ` to see the result

![image](https://user-images.githubusercontent.com/52592748/85571761-61673400-b66f-11ea-9456-ef95acc2acd0.png)





### Changing AppBar color

```react
AppBar position="static">

---

<AppBar position="static" style={{background: "#42A5F5"}}>
```



### Changing text color in AppBar

- Erase everything except the second line

```html
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->

---

<meta name="viewport" content="width=device-width, initial-scale=1" />
```

- Add style to Typography

```react
<Typography variant="h6" className={classes.title}>

---

<Typography variant="h6" className={classes.title} style={{color: "tan"}}>
```

