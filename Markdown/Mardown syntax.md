# Markwon syntax

### 1. Table of Contents

#### The Easiest Way
- The easiest way is to publish your markdown file in github and find the address of the heading in the page.
- If you click the link icon in front of the heading you wish to know the addresss of, the address of the page will automatically change
![](https://images.velog.io/images/jehjong/post/220c12e8-e5b1-4328-b15b-58b62625dfcd/image.png)

- And shows the addresss of the heading at the end. Just copy and paste it
![](https://images.velog.io/images/jehjong/post/46915613-0a55-49fd-b272-aef2a4405ee1/image.png)

```
	[Table of Contents][#1-table-of-contents]
```

- This method reuiqres no knowlege about how to format the address of headings.

#### Rules
- `[Text to display](#title)`
- Spaces are replaced by '-' (Tabs are not replaced by '-')
- '.', '-', ':' are ignored
- Capital letters are changed to lowercase
- Regardless of hearders, the link of the title begins with a '#'
- A [site](https://ecotrust-canada.github.io/markdown-toc/) that generates Table of Contents is helpful but not always correct
- Example:<br>
   - Let's say there's a markdown like below
     > # TOC
     > ## 1. What is TOC
     > TOC is Table of Contents
     > ## 2. How to make TOC
     > Change uppercase to lowercase
     
  - Let's make TOC with the markdown above
    ```
    **Table of Contents**
    
    [TOC](#toc)
    
    1. [What is TOC](#1-what-is-toc)
    
    2. [Making TOC](#2-how-to-make-toc)
    ```


**Table of Contents**

[TOC](#toc)
    
1. [What is TOC](#1-what-is-toc)
    
2. [Making TOC](#2-how-to-make-toc)


<br>


---


<br>

### 2. Embedding an image
- How to embed an image: ![Image](image address)`
- How to embed an image that hasn't been uploaded anywhere:
  - Go to any of your repository
  - Go to the "Issues" category
  ![image](https://user-images.githubusercontent.com/52592748/86533286-1bca2700-bf0b-11ea-8b53-9a0613224a0a.png)
  - Click "New issue" button <br>
  ![image](https://user-images.githubusercontent.com/52592748/86533343-7d8a9100-bf0b-11ea-8ba7-a198f1350288.png)
  - Copy paste image and wait for the image's URL to appear
  ![image](https://user-images.githubusercontent.com/52592748/86533320-5af87800-bf0b-11ea-8cfd-d98d61a330e1.png)
  - Copy paste what's generated
  ![image](https://user-images.githubusercontent.com/52592748/86533338-72cffc00-bf0b-11ea-85b4-fdaa0c6d13fc.png)


<br>


---


<br>

### 3. Use Typora
- Typora is a markdown editor that simultaneously shows the preview version of what you're typing
- `cmd + /` for mac and `Ctrl + /` for windows switches between source code mode and read mode


<br>

---

<br>

