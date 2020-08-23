# TIL-Today-I-Learned-


#React

```
const e = React.createElement;

// e([type], [function], [text]);
return e('button', { onClick: () => { this.setState({ liked: true })}, type:'submit' }, this.state.liked === true ? 'liked' : 'like');
```

Using text babel, this code can be modified like below:

```
return <button type="submit" onClick={() => { this.setState({ liked: true})}}>
  {this.state.liked === true ? 'liked' : 'like'
</button>;
```
`<script type="text/babel">`

`state` changing elements

`tag` elements that remain the same

- We can use JavaScript in between {} under tags

The type of `button` is `submit` in default under form tags.
No need to write `<button type="submit">`
