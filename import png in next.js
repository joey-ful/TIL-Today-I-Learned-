## How to import image in Next.js

### [Next-images](https://github.com/twopluszero/next-images#readme)

1. `npm i next-images` Install next-images

2. Create a `next.config.js` in the project

```javascript
const withImages = require('next-images')
module.exports = withImages()
```

3. Impot using one of the following formats

```javascript
export default () => <div>
  <img src={require('./my-image.jpg')} />
</div>
```

```javascript
import img from './my-image.jpg'

export default () => <div>
  <img src={img} />
</div>
```

