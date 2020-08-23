# TIL-Today-I-Learned-  20200622(Mon)



# React-Nodebird Renewal

## Next
Next is a React Framework
Next's best feature is SSR

## [SSR vs. CSR](https://www.youtube.com/watch?v=AjZw9xMJzUE&list=PLcqDmjxt30RujZzqIS1sAHz92TZDaRB9d&index=1)

### SSR 

- **Broswer** request a page to the **front** server
- The front server requests posts to the **backend** server
- The backend server requests the actual data of the posts to the **database**
- The **database** sends the data to the **backend**
- The **backend** sends the posts to the **front**
- The **front** server combines the html with the posts and send it to the **browser**
- The **browser** loads the whole web page

### SPA (CSR)

How single page applications like React work

- The **browser** requests a page to the **front** server
- The **front** server sends js, html, css files and images
- The **browser** creates the web page with the front files and requests posts to the **backend** server
- The **backend** server requests data to the **database**
- The **database** sends data to the **backend**
- The **backend** sends data to the **browser****
- The **browser** loads the posts (the changing part)


## [Pros and Cons](https://www.youtube.com/watch?v=_Ir8sDjnq2s&list=PLcqDmjxt30RujZzqIS1sAHz92TZDaRB9d&index=2)

- The SSR method shows the web page at once, but takes more time to load the page
- The CSR only shows the unchanging parts of the browser so the web page is loaded separately.
- Users are said to leave the browser if they don't see anything on it for 3 seconds. In this sense, CSR can make the users wait longer on the web page
- So web sites that need fast interactions with users are better with the CSR method


### Limitations of CSR

1. When search engines loads a single page applications, they might think the minimal HTML page is everything and leave the page. (Some search engines like Google wait for the rest of the single page application page to laod)
 >> Solution1: Server-side rendering (SSR) for the first web page and CSR for the rest of the pages
 >> Solution2: Pre-rendering: Only use SSR to search engines and keep the CSR method for users

2. When loading web pages, users receive all the data of the page, even unnecessary ones.
 >> Solution: Code-splitting: A feature of webpack that allows us to split code into various bundles that can be loaded on demand or in parallel
 
Zerocho's nodebird in SSR method without using Next(just React) [reactGo](https://github.com/reactGo/reactGo)
