## 🐾 1. Done

#### `Taelee`

- **Added a delete button on the database in localhost using express generator and pug**

#### `Mihykim`

- **Failed to apply mdb and bootstrap but succeeded in applying react bootstrap**
  - React bootstrap seems like a react version of bootstrap and they seem alike



## 🐾 2. Learned

#### `Mihykim`

- **Global stylesheet can only be imported in _app.js file**

  - This css file applies to all the pages and components

- **Each component's stylesheet should be in 'module.css' filename extension**

  - Same class names in different css files have no risks of collision
  - A css plugin used to be provided in Next's creator, [zeit's github](https://github.com/vercel/next.js/tree/master), but not anymore
  - Learned how to apply css in [Next's  official site](https://nextjs.org/docs/basic-features/built-in-css-support)

- **Importing specific libraries is recommended**

  - Instead of importing material-ui/core

  - It is recommended to import specific libraries such as material-ui/core/icons

    


#### `Secho`

- **Watched [Next and react setup tutorial](https://www.youtube.com/watch?v=WzE08kNG4mg)**
  - Read data through front and server's interaction using Next
  - Used the function fetch
- **Next manages routing and brings data from web API to the server through an asynchronous process**
  - Asynchronous communication is possible through await, async, fetch and back server's API address
- **Each page's layout can be set through showidjs**
  - Every page has an Id that can be received as a number
  - No need to layout every page's view separately
  - Similar to using templates
  - In the case of localhost:3000/show/33, 33 is the Id number



#### `Mihykim Tech Seminar`

- **Richard Stallman came up with the concept of Free Software**

  - He campaigned for the free software movement that encouraged many peopel to edit the codes

  - However, the term "free" was misleading; people understood it as without payment while Stallman actually meant no restriction.

- **OSI(Open Source Initiative) was established in 1998**

  - In 1997, Bruce Perens published a formal definition of Open Source. 

  - Eric Raymond adopted the term Open Source and co-founded an official organization called OSI.

  - OSI promotes Open Source and provides criteria that users should meet including:

    - Free Redistribution

    - Include Source Code

    - Allow modifications and derived works

    - Distribution of modifications and derived works

    - Allow sales of modifications and derived works

- **Open Source is not free**

  - Freeware is free
  - Open Source provides several licenses and their criteria
  - Somes Open Source's licenses are not always free
  - Open Source is protected by copyright

- **There are 9 popular licenses and MIT is one of them**

  - GPL is the strongest license that is recursively applied to every modifications and derived works.

    - If GPL source code is open, its modifications and derived works should open their source codes
    - This forced SONY to recall 40million DVDs and PlayStation3 to open its source codes.
  - Lately, licenses with less restrictions like MIT is more widely used than GPL
  - Such licences include LGPL, MIT, Apache and BSD
  - Commonly used Software tend to use these licenses

- **Things to remember**

  - Users are obliged to provide the license information
    - A copy of the licence and information on copyright holder and officials including devlopers and authors should be provided
  - Modifications and derived works should distributed with the same license
  - Source code should be open in the case of a Copyleft license

- **Copyright convention** 

  > Copyright [Year] [Copyright Holder] All Rights Reserved.
  >
  > Copyright [Year] [Company name] Corp.

  - Copyright and :copyright: are interchangeable

  <br>

  

#### `Secho Tech Seminar`

##### 1. Our Project's sturcture

- We use React, CSS, Express, NodeJS and Mysql

- CRA(Create-React-App) 

  - html created by CRA is empty and when there's a request, it builds the js file to create the view
  - When the whole html is loaded, it is displayed in the browser
  - One major disadvantage is that search engines consider the first empty html page as an empty site and does not expose it on the search list

  ![image](https://user-images.githubusercontent.com/52592748/86435915-1074d100-bd3c-11ea-9de7-958f4b603a47.png)

- **To see the view and data together, the data is brought through back server and front server's interaction**

  - Users request the page to the front server
  - js is loaded in the empty html
  - Proxy requests Express
    - proxy: a device that connects localhost 3000 and express 5000
  - Express uses sql commands to bring database from the database server
  - Database server reads the query commands and returns data to Express
  - Express turns the data into json type and send it to the empty page
    - json type is a list of strings
    - `Taelee`: json type is JavaScript object notation, a document that every programming languages can understand
    - It is in the format of a dictionary like {id: 1, title: 'title', content: 'content', ...}
  - React server gets the router value from proxy and puts it in the Response object
  - Response is turned into a json type
  - The json type Response is saved in state
  - Since this is saved in a component users are able to see it
  - A single line of code is needed to use proxy
    - `response - fetch('/api/postst');`
    - proxy 5000 is omited in front of fetch
    - Response is an object with values in it so we can get values using keys
    - `Taelee`: The line of code above tells React where to get information

##### 2. Traditional Server Side Rendering (SSR)

![image](https://user-images.githubusercontent.com/52592748/86440439-6732d880-bd45-11ea-93bc-0c19ee00561d.png)

- **HTML is built on server**
  - Returns html everytime there is a request
  - html files are saved in the server in a static manner and only the requested html is returned
  - The web page is refreshed every time the return occurs
  - Its complexity increases as the applications' complexities increase
- **We can get values using next so we can consider our front as a server that uses fetch and async**
  - `Taelee`: Regardless of using Next or React, the front server can either be static or dynamic
    - All the files are built to html, css and js
    - We jsut need to know if it's a server or not
    - Is the front is a server, we need to think about what method to use, like fetch
    - The main characteristic of a server is wheter it can request and reply or not
    - yebalja.com's front is static

##### 3. Client Side Rendering (CSR)

![image](https://user-images.githubusercontent.com/52592748/86435986-4023d900-bd3c-11ea-963f-83c1660a70ad.png)

- **Rendering occurs on client's browser**

  - User's browser starts rendering the HTML from the server 
  - No need to wait for all the JS to be downloaded when displaying 
  - All the necessary files for rendering are downloaded and combined into one bundle

- **When a new page is requested, only the necessary data is transferred to create the page (Responsive)**

  - Reduces traffic

- **Takes time to download all the resources in the beginning**

  - Takes time to interpret js

- **React's SSR**

  - The first page is provided by the server
  - Takes less time to view the initial page
  - Initial render of HTML happens on the server while react analyzes JS. Page is not viewable until all the JS is loaded in CSR. In SSR, page is viewable, but not interactable until JS is loaded
    - `Daelee`: Are gray screens on youtube displayed due to SSR?
    - `Taelee`: That is CSR. With SSR, white screen is displayed before the page pops up

- **CSR vs SSR**

  - SSR's initial render is faster
  - SSR doest not expose the web page on search engines
    - Google displays the web site because JS is made by Google
  - SSR is more complex

  ![image-20200703155503731](/Users/jehong/Library/Application Support/typora-user-images/image-20200703155503731.png)

##### 4. Next

- ![image](https://user-images.githubusercontent.com/52592748/86440566-a19c7580-bd45-11ea-9b0c-c265d89d3395.png)
  - `Taelee`: In case of a Single Application, only the initial page loads with SSR. Since this process takes a while, Code Splitting is used to only render the necessary data on the page
  - `Mihykim`: "What is automatic page optimization?"
    - _app.js is said to be relevant

<br>



#### `Daelee`

- **Figured out the basic structure of the Yearly calendar**
  - Only need to modify files under the demo directory
  - src directory containes builders, constants and utils files
  - Major modifications occur in builders.js which contains several functions like components
  - buildElements in builders.js is the main function
  - Variables are declared in constants.js
  - Functions are declared in utils.js
  - An element refers to the colored bar representing the schedule of a program
  - Parameters of the function for imputing data are trackId, start and end

<br><br>



## 🐾 3. Decided

#### `Mihykim` 

- **Decided to use React Bootstrap components**

<br><br>



## 🐾 4. Thinking

#### `Taelee`

- **Trying to figure out if timeline, table and yearly calendar need a database each**
  - `mihykim`: It seems better if the timeline and yearly's data are linked
  - Data can be linked. The table and Yearly could pick relevant data from a single database because most of their data overlap.

- **Back-end's top priority is to figure out how our front-end will read data**
  - 1. Front-end can use the fetch function to read data from the back server
  - 2. Front-end can use the axios library that allows to read information on a specific site. 
  - `Daelee`: Is this process necessary when our front and back codes are contained in the same folder?
  - Database's data are not static. Database is on the server so the process of of reading the server is necessary

  - `Mihykim`: How do we input data in the server?
  - mysql is installed in GCP which can export and import data 
  - Back express can open the library called npm mysql using query commands

- **If yebalja.com's front is not a server, it's another challenge to bring data to a static front**
  - Front could either be static or be a server. I was led to believe that Front is a server when it can actively pass data to the back server and thus modifying the database through new inputs

<br>



#### `Mihykim`

- **Installed the component library instead of the CDN (Content Delivery Network) method**

  - `Taelee`: I was led to believe that it's better to install libraries because CDN is highly dependent on the speed of the Internet
  - `Daelee`: I was told that CDN is better

- **What is --save?**

  - `Taelee`: I heard that the option is used to firmly declare our usage. I verified that the library is 사용한다는 것을 명확하게 표현하고 싶을 때 --save 옵션을 적용해준다고 들었습니다. 해당 옵션을 써주면 dependency에 추가되고 안 쓰면 dev dependency에 추가되는 것을 확인했습니다. 하지만 최근에는 사용해도 사용하지 않아도 상관없다고 들었습니다.

  <br>

  

#### `Daelee`

- **연간일정에 데이터를 넣는 방법이 고민입니다**
  - 시작일, 종요일, 프로그램 이름을 넣을 수 있는 함수가 있는데 사용법이 직관적이지 않습니다
    - 연간에 예제로 나온 일정들은 모두 랜덤으로 생성된 것이라 실제 사용법을 익히기 쉽지 않습니다.
  - `Mihykim`: 연간의 최소 단위가 month인데 day단위로 할 수 있는지 확인해봐야합니다
  - 단위를 day로 변경해야할 것 같습니다.
  - buildTimebar 함수에 연도를 넣으면 행을 추가할 수 있을 것 같습니다.

<br>



#### `Jehong`

- **일러스트를 어떻게 추가할 지 고민입니다**
  - 일러스트의 svg 코드를 html에 바로 넣는 방식을 사용하고있는데 코드가 너무 길어 가독성이 좋지않습니다.
  - img 태그를 이용하면 html파일에 한줄로 일러스트를 불러올 수 있으나 애니메이션이 작동하지 않습니다.
  - object 등의 태그들은 또다른 문제점들이 있지만 한 번 시도해볼만합니다.
  - 우선은 점보트론 컴포넌트에 svg 코드를 넣어 점보트론을 불러오면 일러스트가 불러와지도록 시도해보려고합니다.
- **일러스트의 애니메이션 작동 방식이 고민입니다**
  - 단순한 도형들의 애니메이션은 구현이 가능하나 svg는 같은 방식으로 작동하지 않는 것을 확인했습니다.
  - svg의 경우 애니메이션끼리 충돌이 생기는 것 같습니다.
  - 여러 시도 끝에 원하는 방향과 비슷한 애니메이션을 만들었으나 완성도가 아쉬워 고민입니다.



<br><br>



## 🐾 5. 할 일이 있습니다.

#### `front-end`

- **Next와 React Bootstrap을 사용해 'Home' 페이지 주요 컴포넌트를 구현해야합니다. (기한: 2020.07.02 목)**
  - 연간일정 구현 (대현)
  - 비교표에 7개요소 모두 포함 및 반응형 고려. 페이지에 일러스트 추가 (정아)
  - 내비바, 점보트론, 푸터 구현 (미혜)
  - 토표로 뽑은 [컬러스킴](https://github.com/FiveEat42/yebalja.com/issues/26)을 적용하도록 합니다.
- **연간, 타임라인, 비교표 등에 필요한 데이타를 정해서 백에 알려줘야합니다**
- **Home페이지 디벨롭 후 jsainsburyplc의 연간 코드 분석하기**
  - Daelee 님이 푸쉬해주는 주석달린 코드 참고합니다
  - builders.js에서 buildElements 함수 위주로 이해하도록 합니다
  - 기존의 분기/월 단위를 월/주 단위로 변경하기
  - 연간 행 추가하기 (작년/내년을 함께 볼 수 있도록)
  - 데이타를 날짜 단위로 입력 받을 수 있게 하기

<br>



#### `back-end`

- **localhost에서 자료 입력 기능 추가**
- **예발자 페이지를 yebalja.com/db에서 관리하는 어드민 페이지 만들기**
  - yebalja.com/db에서 데이타베이스의 정보를 입력하고 삭제했을 때 메인 페이지에 바로 적용되도록 하려고 합니다.
- **프론트에서 필요한 데이타를 데이타베이스에 만들어야합니다.**
  - 연간일정에서 필요한 데이타는 시작날, 끝나는날, 프로그램 이름입니다.
  - 백에서 데이타베이스를 올리면 프론트팀의 컴퓨터에서 fetch나 axios로 불러올 수 있습니다
- **https를 위해 인증서 발급 받기**


<br><br>



## 🐾 3. Decided

<br><br>



## 🐾 4. Thinking

<br><br>



## 🐾 5. To-Do.





<br><br>

---

<br><br>





## 🐾 1. 마무리했습니다.

#### `Taelee`

- **localhost에서 express generator와 pug를 이용해 자료 삭제 기능을 구현했습니다**

#### `Mihykim`

- **mdb와 bootstrap은 모두 안됐는데 react bootstrap의 컴포넌트 적용은 성공했습니다**
  - 부트스트랩에서 본 것이랑 비슷해보이는데 리액트 용으로 나온 것 같습니다.

#### `Jehong`

- **메인페이지 일러스트를 완성했습니다**
  - svg로 export해서 코드에 추가할 수 있습니다.
  - css를 이용해 애니메이션을 구현했습니다.

<br><br>



## 🐾 2. 배웠습니다.

#### `Mihykim`

- **글로벌 스타일시트는 _app.js 파일에서만 import할 수 있습니다**
  - 이 css파일은 모든 페이지와 컴포넌트에 적용됩니다
- **컴포넌트별로 적용되는 css파일의 확장자는 module.css 으로 고정되어야 합니다.**
  - 다른 css파일에 같은 class이름을 사용하더라도 충돌날 일이 없습니다.
  - 예전에는 넥스트를 만든 [zeit의 깃헙](https://github.com/vercel/next.js/tree/master)에서 css plugin을 지원했었는데 이제는 지원하지 않습니다.
  - 따라서 [넥스트 공식홈페이지](https://nextjs.org/docs/basic-features/built-in-css-support)에서 위의 css 적용 방식을 배웠고 이 외에도 좋은 정보를 많이 볼 수 있었습니다.  
- **전체 library를 불러오지 않고 특정 library를 불러오는 것이 권장됩니다.**

  - material-ui/core를 import하기보다는

  - material-ui/core/icons 와 같이 필요한 부분만 참조하는 것이 좋습니다.

<br>




#### `Secho`

- **[넥스트와 리액트 통신 영상](https://www.youtube.com/watch?v=WzE08kNG4mg)을 보고 따라서 구현해봤습니다**
  - 넥스트를 이용해 프론트가 서버와 통신해서 데이타를 불러오는 것입니다.
  - fetch함수를 사용해봤습니다.
- **넥스트에서 라우팅도 되고 현재 웹으로 있는 웹 API에서 비동기로 데이타를 불러와서 서버에 뿌려줍니다.**
  - await, async, fetch를 이용하고 백서버 API주소를 써서 서버와 비동기로 통신이 가능합니다.
- **showidjs를 사용해 각 페이지를 꾸밀 수 있습니다.**
  - 각 페이지마다 아이디가 있는데 그것을 계수로 받아서 사용합니다 
  - 페이지별 뷰를 꾸미지 않아도됩니다.
  - 아이디별로 template을 적용한다고 생각하시면 편할 것 같습니다.
  - localhost:3000/show/33 의 경우 33번이 아이디입니다.

<br>



#### `Mihykim 테크 세미나`

- **Open Source 이전에 리처드 스톨만이 Free Software라는 개념을 고안했습니다.**

  - 소프트웨어가 좋아지려면 많은 손을 타야하기에 많은 사람들이 코드를 수정할 수 있게 하자는 운동
  - 하지만 free의 자유롭다는 의미를 사람들이 무료로 착각을 하는 문제가 생겼습니다.

- **1998년 OSI(Open Source Initiative)가 설립되었습니다**

  - 1997년 브루스 페렌스가 처음으로 오픈소스를 정의했습니다

  - 에릭 네이먼드는 프리 소프트웨어에 오픈소스 용어를 채택해 OSI라는 공인된 기관을 만들었습니다.

  - OSI는 오픈 소스의 의미와 OSI가 추구하는 라이센스 사용 조건들을 제시하며 일부는 아래와 같습니다.

    - 아무 대가 없이 재배포 가능

    - 소스코드 접근 가능

    - 소스코드 수정 가능

    - 수정한 소스코드 배포 가능

    - 수정한 소스코드 상업적 판매도 가능

- **오픈소스는 무료가 아닙니다**

  - 프리웨어는 무료입니다
  - 오픈소스는 라이센스가 다양하며 라이센스별로 사용 조건들을 제시합니다.
  - 라이센스 자체의 판매가 유료인 오픈소스도 있습니다.
  - 오픈소스도 저작권은 존재합니다

- **라이센스 종류는 자주 사용되는 것이 9개가 있으며 그 중 MIT도 포함되어있습니다.**

  - GPL은 가장 강력한 라이센스로 재귀적 GPL이 적용됩니다.

    - GPL 소스코드가 공개라면 해당 코드를 사용한 프로그램들도 강제로 코드를 공개해야합니다.
    - 이 때문에 SONY는 DVD 4천만장을 리콜한 적도 있고 플레이스테이션3은 강제로 소스를 공개하기도 했습니다.
  - 최근에는 GPL을 기피하고 MIT와 같은 약한 라이센스 사용이 늘어나고 있습니다.
  - 약간 라이센스는 LGPL, MIT, Apache, BSD 등이 있습니다.
  - 공통적으로 들어가게 되는 소프트웨어는 약한 라이센스를 사용한다고 합니다.

- **이것만은 알고 가자!**

  - 라이센스 정보의 제공 의무가 있습니다.
    - 라이센스 사본과 저작자 및 개발자 정보를 제공할 의무가 있습니다.
  - 동일한 라이센스로 재배포해야합니다.
  - Copyleft 라이센스의 경우 소스코드도 제공해야합니다.

- **푸터에 들어가는 저작권 표시**

  - 표기방식은 아래와 같습니다. 

    > Copyright [연도] [이름] All Rights Reserved.
    >
    > Copyright [연도] [회사이름] Corp.

  - Copyright 대신 :copyright:를 사용해도 됩니다.

  <br>

  

#### `Secho 테크세미나`

##### 1. 우리 프로젝트의 구조

- 리액트, CSS, Express, NodeJS, Mysql을 사용합니다

- CRA(Create-React-App) 방식

  - html은 비어있다가 요청이 들어오면 브라우저 상에서 js를 빌드하며 html을 채워 view를 만듭니다
  - html이 모두 로드가 되면 화면을 보여줍니다
  - 검색엔진이 빈 화면을 완성이 안 된 웹사이트로 인식해 노출을 안 시켜준다는 단점이 있습니다.

  ![image](https://user-images.githubusercontent.com/52592748/86435915-1074d100-bd3c-11ea-9de7-958f4b603a47.png)

- 뷰랑 데이타를 같이 보려면 백엔드에서 직접 데이타랑 연동해서 프론트랑 통신해서 받아옵니다.

  - 유저가 프론트서버로 게시글 요청
  - 빈 html에서 js를 로드
  - proxy가 익스프레스에게 요청
    - proxy: localhost 3000번과 express 5000을 통신시키는 장치
  - 익스프레스는 서버에서 sql문으로 직접 데이타베이스를 가져옵니다
  - 데이타베이스는 query문을 읽고 데이타를 익스프레스에게 반환
  - 익스프레스는 데이타 정보를 json타입으로 변환해서 빈페이지에 뿌려줍니다
    - json 타입은 단순히 문자열입니다
    - `Taelee`: JavaScript object notation 으로 언어마다 형식이 다르니까 언어끼리 정보를 주고받을 때 쓰는 notation을 이용해서 작성한 문서입니다.
    - {id: 1, title: '제목입니다', content: '내용', ...} 처럼 키와 값으로 작성됩니다.
  - 리액트 서버가 프록시에서 받아서 라우터 값을 response 객체에 넣게 됩니다
  - response를 json타입으로 변환
  - 변환된 json을 가공해서 state에 저장
  - 이는 컴포넌트에 저장된 것으로 우리가 볼 수 있습니다.
  - 프록시는 리액트에 한줄만 써주면 됩니다.
    - `response - fetch('/api/postst');`
    - fetch앞에 proxy 5000번 적힌 것이 생략됨
    - response는 값이 들어있는 개체니까 키값을 뽑아서 가져올 수 있음
    - `Taelee`: 이 한 줄이 리액트에게 정보를 어디서 얻을지 알려주는 것입니다

##### 2. 전통적인 서버사이드 랜더링 SSR

![image](https://user-images.githubusercontent.com/52592748/86440439-6732d880-bd45-11ea-93bc-0c19ee00561d.png)

- **랜더링되는 주체가 서버**

  - 요청이 올 때마다 서버에서 html을 반환
  - 서버에는 html파일이 다 정적으로 저장되어 있는데 그 중 요청받은 게시글을 반환해줍니다.
  - 이 때마다 새로고침이 계속 일어납니다.
  - 웹에서 제공하는 정보가 많아지면서 문제가 생깁니다.
- **넥스트를 쓰면 값을 받아올 수 있으니까 서버가 있는 것처럼 생각해도 됩니다. fetch, async 등**
  - `Taelee`: 넥스트나 리액트나 정적일 수도 아닐 수도 있습니다.
    - 모든 파일을 빌드하면 html, css, js로 바뀝니다.
    - 서버냐 서버 아니냐로만 구분하면 됩니다.
    - 서버면 fetch를 사용할지 등을 고민하면 됩니다.
    - 서버는 요청과 응답을 할 수 있냐 없냐라고 생각하면 편할 것 같습니다.
    - yebalja.com에는 프론트 서버가 없습니다 정적입니다.

##### 3. 클라이언트 사이드 랜더링 CSR

![image](https://user-images.githubusercontent.com/52592748/86435986-4023d900-bd3c-11ea-963f-83c1660a70ad.png)

- **랜더링되는 주체가 클라이언트**

  - 클라이언트는 브라우저 상에서 랜더링이 됩니다.
  - 브라우저가 js를 랜더링 시킴
  - 랜더링하기 위해 필요한 정적인 리소스를 모두 다운받아 하나의 번들로 만듭니다.

- **새로운 페이지를 요청할 때 필요한 데이타만을 전달받아 페이지를 만들기도 합니다 (반응형)**

- 전체적인 트래픽을 감소

- **처음에 모든 리소스를 다운받기 위해서는 시간이 걸립니다.**

- js를 받아서 해석하기까지 대기시간 필요

- **리액트의 서버사이드랜더링**

  - 최초의 페이지는 서버가 제공
  - 그 다음부터 로딩을 하기때문에 첫 페이지까지의 대기시간이 줄어든다
  - 서버에서 처음 로드될 html만 제공해주고 그 사이에 react가 js를 해석합니다. CSR은 첫 화면을 위해 모든 js를 로드하는 거라 될 때까지 못 보는데 이거는 첫 화면은 보이지만 js 로드가 안돼서 인터렉션은 안됨
    - `Daelee`: 유투브 들어가면 영상 뜨기 전에 회색 뜨는 것도 서버사이드랜더링인가요?
    - `Taelee`: 그것은 클라이언트 사이드 랜더링하는 중입니다. 서버사이드랜더링은 흰 화면이다가 갑자기 뜹니다

- **CSR과 SSR 비교**

  - 초기속도는 SSR이 빠름
  - SSR이 검색엔진에 노출됨
    - js 엔진을 구글에서 만들었기때문에 구글은 CSR로 노출됨
  - SSR은 프로젝트 복잡도가 증가

  ![image-20200703155503731](/Users/jehong/Library/Application Support/typora-user-images/image-20200703155503731.png)

##### 4. Next

- ![image](https://user-images.githubusercontent.com/52592748/86440566-a19c7580-bd45-11ea-9b0c-c265d89d3395.png)
  - `Taelee`: 싱글페이지 어플리케이션의 경우 첫 페이지만 SSR내용을 다 가져오는데 그 과정이 느리기 때문에 필요한 페이지에 대한 코드만 뽑아서 랜더링합니다 그것을 코드 스플리팅이라고 합니다.
  - `Mihykim`: "페이지를 자동으로 최적화는 무엇인가요?
    - _app.js를 사용하는 것과 관련이 있지않을까 싶습니다. _가 의미가 있다고 들었습니다.

<br>



#### `Daelee`

- **연간의 사용법을 일부 파악했습니다**
  - 연간을 사용할 때엔 demo 안의 파일만 건드리면 됩니다
  - src디렉토리 안에 builders, constants, utils가 있습니다
  - 수정은 builders에서 진행됩니다. builders에 컴포넌트들이 여러개 있다고 생각하면 됩니다
  - builders.js의 buildElements가 핵심함수입니다
  - constants에는 변수들을 정의합니다
  - utils에는 함수들이 정의되어있습니다
  - cell은 한 칸을 의미하고 element는 일정을 나타내는 색깔바입니다.
  - 연간에 데이타를 넣기위해서는 함수에 trackId, start, end를 입력하면 됩니다

<br><br>



## 🐾 3. 결정했습니다.

#### `Mihykim` 

- **앞으로 컴포넌트는 react bootstrap을 사용하기로 했습니다**

<br><br>



## 🐾 4. 고민입니다.

#### `Taelee`

- **상세타임라인, 비교표, 연간, 상세페이지 등등 디비를 다 따로 만들어야 할지 고민입니다.**

  - `mihykim`: 테이블은 따로, 타임라인과 연간 등은 데이타가 연계되면 좋을 것 같습니다.
  - 아직 하지 않았지만 연계되게 할 수 있습니다. 비교표와 연간은 데이타베이스에 모든 항목들을 입력해놓고 각 자료별로 해당되는 정보들만 가져가는 방식으로 하면 될 것 같습니다.

- **백엔드에서 우선적으로 해야할 일은 데이터를 프론트에서 읽을 방식을 고민하는 것입니다.**

  - 1. 프론트가 fetch라는 함수를 사용해서 백서버의 데이타를 읽어올 수 있습니다.
  - 2. 프론트가 axios라이브러리를 이용해서 특정 사이트의 정보를 긁어오는 방식으로 백서버의 데이타를 읽어올 수 있습니다.
  - `Daelee`: 우리 자료는 어차피 한 폴더에 있지 않나요?
  - 디비의 정보는 정적이 아니라서 서버에 있기 때문에 서버를 읽는 과정이 필요합니다. 데이타가 서버에 있습니다.

  - `Mihykim`: 서버에 데이타는 어떻게 들어가나요?
  - GCP에 mysql이 깔려있어서 데이타를 export/import 합니다. 
  - Back express가 npm mysql이라는 라이브러리를 query문으로 열어볼 수 있습니다.

- **우리 yebalja.com의 프론트가 서버가 아니라면 자료를 어떻게 가져올지 고민해봐야합니다**

  - 프론트는 정적일 수 있고 서버일 수 있는데 백에게 정보를 능동적으로 넘겨주는 입력이 발생하며 데이타를 변동시킬 때 서버라고 알고있습니다.

<br>



#### `Mihykim`

- **CDN (Content Delivery Network) 방식 말고 컴포넌트 라이브러리를 인스톨 했습니다**

  - `Taelee`: CDN은 인터넷 속도에 좌지우지돼서 설치하는 것이 좋다고 들었습니다.
  - `Daelee`: CDN으로 가져오는 것이 좋다고 들었습니다

- **--save 옵션이 무엇인지 궁금합니다.**

  - `Taelee`: 사용한다는 것을 명확하게 표현하고 싶을 때 --save 옵션을 적용해준다고 들었습니다. 해당 옵션을 써주면 dependency에 추가되고 안 쓰면 dev dependency에 추가되는 것을 확인했습니다. 하지만 최근에는 사용해도 사용하지 않아도 상관없다고 들었습니다.

  <br>

  

#### `Daelee`

- **연간일정에 데이터를 넣는 방법이 고민입니다**
  - 시작일, 종요일, 프로그램 이름을 넣을 수 있는 함수가 있는데 사용법이 직관적이지 않습니다
    - 연간에 예제로 나온 일정들은 모두 랜덤으로 생성된 것이라 실제 사용법을 익히기 쉽지 않습니다.
  - `Mihykim`: 연간의 최소 단위가 month인데 day단위로 할 수 있는지 확인해봐야합니다
  - 단위를 day로 변경해야할 것 같습니다.
  - buildTimebar 함수에 연도를 넣으면 행을 추가할 수 있을 것 같습니다.

<br>



#### `Jehong`

- **일러스트를 어떻게 추가할 지 고민입니다**
  - 일러스트의 svg 코드를 html에 바로 넣는 방식을 사용하고있는데 코드가 너무 길어 가독성이 좋지않습니다.
  - img 태그를 이용하면 html파일에 한줄로 일러스트를 불러올 수 있으나 애니메이션이 작동하지 않습니다.
  - object 등의 태그들은 또다른 문제점들이 있지만 한 번 시도해볼만합니다.
  - 우선은 점보트론 컴포넌트에 svg 코드를 넣어 점보트론을 불러오면 일러스트가 불러와지도록 시도해보려고합니다.
- **일러스트의 애니메이션 작동 방식이 고민입니다**
  - 단순한 도형들의 애니메이션은 구현이 가능하나 svg는 같은 방식으로 작동하지 않는 것을 확인했습니다.
  - svg의 경우 애니메이션끼리 충돌이 생기는 것 같습니다.
  - 여러 시도 끝에 원하는 방향과 비슷한 애니메이션을 만들었으나 완성도가 아쉬워 고민입니다.



<br><br>



## 🐾 5. 할 일이 있습니다.

#### `front-end`

- **Next와 React Bootstrap을 사용해 'Home' 페이지 주요 컴포넌트를 구현해야합니다. (기한: 2020.07.02 목)**
  - 연간일정 구현 (대현)
  - 비교표에 7개요소 모두 포함 및 반응형 고려. 페이지에 일러스트 추가 (정아)
  - 내비바, 점보트론, 푸터 구현 (미혜)
  - 토표로 뽑은 [컬러스킴](https://github.com/FiveEat42/yebalja.com/issues/26)을 적용하도록 합니다.
- **연간, 타임라인, 비교표 등에 필요한 데이타를 정해서 백에 알려줘야합니다**
- **Home페이지 디벨롭 후 jsainsburyplc의 연간 코드 분석하기**
  - Daelee 님이 푸쉬해주는 주석달린 코드 참고합니다
  - builders.js에서 buildElements 함수 위주로 이해하도록 합니다
  - 기존의 분기/월 단위를 월/주 단위로 변경하기
  - 연간 행 추가하기 (작년/내년을 함께 볼 수 있도록)
  - 데이타를 날짜 단위로 입력 받을 수 있게 하기

<br>



#### `back-end`

- **localhost에서 자료 입력 기능 추가**
- **예발자 페이지를 yebalja.com/db에서 관리하는 어드민 페이지 만들기**
  - yebalja.com/db에서 데이타베이스의 정보를 입력하고 삭제했을 때 메인 페이지에 바로 적용되도록 하려고 합니다.
- **프론트에서 필요한 데이타를 데이타베이스에 만들어야합니다.**
  - 연간일정에서 필요한 데이타는 시작날, 끝나는날, 프로그램 이름입니다.
  - 백에서 데이타베이스를 올리면 프론트팀의 컴퓨터에서 fetch나 axios로 불러올 수 있습니다
- **https를 위해 인증서 발급 받기**
