
## Multiple classNames

Adding [multiple classnames](https://github.com/rtsao/csjs/wiki/How-to-apply-multiple-classnames-to-an-element) in Next.js

- Adding classnames `first` and `second` to div

```javascript
import classNames from 'classnames';

const Component = () => {
 return (
	<div className={classNames({[styles.first]: true, [styles.second]: true})}>
		Content
	</div>
 );
}

```



