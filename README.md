# TIL-Today-I-Learned-  20200622(Mon)



## Props

- Props are inherited from a parent component to a child component.
- They are like parameters of a function



### In a single file

- NumberBaseball.jsx

```react
return (
    <React.Fragment>
        <ul>
            {this.fruits.map((v, i) => {
            return (
               <li>
                	<b>{this.props.value.fruit}</b> - {this.props.index}
                  <div>content1</div>
                  <div>content2</div>
                  <div>content3</div>
                  <div>content4</div>
            	</li>
            );
        })}
        </ul>
    </React.Fragment>
);
```



### Separate using props

- NumberBaseball.jsx

```react
import Try from './Try';

.
.
.

return (
    <React.Fragment>
        <ul>
            {this.fruits.map((v, i) => {
            return (
                <Try value={v} index={i} />
            );
        })}
        </ul>
    </React.Fragment>
);
```

- Try.jsx

```react
import React, { Component} from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <b>{this.props.value.fruit}</b> - {this.props.index}
                <div>content1</div>
                <div>content2</div>
                <div>content3</div>
                <div>content4</div>
            </li>
        );
    }
}

export default Try;
```



### Context, Redux, Mobx

- Used to manage props inheritance (Grand parent to grand child, grand grand child to grand grand parent, etc)





## Which type of Function to use

#### Arrow Function

- A function should be in the form of an arrow function in React

- This arrow function automatically handles the "bind" attribute

```react
onSubmitForm = () => {

};
```



#### Past react function

- The following two lines are required

```react
  	constructor(props);
      super(props);
```

- Functions are in the form of

```
onSubmitForm(e) {

}
```

- "bind" attribute is needed

```react
class NumberBaseball extends Component {
	constructor(props);
    super(props);
    this.state = {
      result: '',
      value: '',
      answer: getNumbers(),
      tries: [],
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
}

onSubmitForm(e) {
	e.preventDefault();
	console.log(this.state.value);
};

onChangeInput(e) {
	this.setState({
		value: e.target.value;
	});
};
```

- Render() function is in this from because the following feature automatically handles the bind attribute

```react
class NumbrBaseball extends Component {
};
```



## Array

- Cannot use push in React

```react
const arr = []
>> undefined
arr.push(1)
>> 1
arr === arr
>> true
```

- Even though an element has been added to the array, react sees it as the same array and doesn't not render.
- The array that's referred to should be different

```react
const arr1 = []
>> undefined
const arr2 = [...arr1, 1]
>> undefined
arr2
>> [1]
arr1 === arr2
>> false
```

- When adding an element to arr1, copy arr1 and then add the element



---



# React-Nodebird Renewal

## SSR

- **Broswer** request a page to the **front** server
- The front server requests posts to the **backend** server
- The backend server requests the actual data of the posts to the **database**
- The **database** sends the data to the **backend**
- The **backend** sends the posts to the **front**
- The **front** server combines the html with the posts and send it to the **browser**



## SPA (CSR)

How single page applications like React work

- The **browser** requests a page to the **front** server
- The **front** server sends js, html, css files and images
- The **browser** requests posts to the **backend** server
- The **backend** server requests data to the **database**
- The **database** sends data to the **backend**
- The **backend** sends data to the **browser****
