# SVG Animation in React

## How to import SVG

##### 1. First, svg needs to be turned into jsx

- For instance, `:[lowcase]` and `-[lowcase]` should turn into `:[uppercase]` and `-[uppercase]` respectively
-  However, if you don't know what to change, or if there are too many to change there's a [site](https://svg2jsx.com/) that changes the format of the svg so that it can be imported in jsx. This site doesn't change all the grammars, but it works fine.

##### 2. Copy paste

- There should be a 

##### 2. Change classNames

- The svg's classnames need to be changed to apply css.
- `className={styles.classname}` format will do.

[Viewbox tutorial](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844)

## viewBox

- The last two numbers refer to zoomming. It tells how much of the image's actual width will be shown.

`viewBox = [min-x] [min-y] [width] [height]`

- If the circle's width and height are 700px each, the following viewbox will show the whole circle.

```javascript
viewbox="0 0 700 700"
```

![image](https://user-images.githubusercontent.com/52592748/87250455-cf00c600-c49f-11ea-912e-a6cc47fedac1.png) 

- On the other hand the following 350 viewBox will only show half of each width and height thus resulting in a quarter.

  ![image](https://user-images.githubusercontent.com/52592748/87250446-b98b9c00-c49f-11ea-8f6b-f1f54f271cbe.png) 

```javascript
viewBox="0 0 350 350"
```

### viewport

- Viewport smanages the 

```javascript
<svg width="" height="">
```

### 

```html
<svg width="50" height="50" viewBox="0 0 100 100">
  <ellipse cx="50" cy="50" rx="50" ry="50"></ellipse>
</svg>
```

